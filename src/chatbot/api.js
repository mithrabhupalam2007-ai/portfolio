/**
 * OpenRouter chat client.
 *
 * Requires a VITE_OPENROUTER_API_KEY in a local env file (see .env.example).
 * NOTE: VITE_* variables are inlined into the public bundle — treat the key
 * as public and keep a spend limit on it in the OpenRouter dashboard.
 */

const BASE_URL = import.meta.env.VITE_OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1'
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || ''

export const MODEL = 'google/gemma-4-31b-it:free'

export const isConfigured = () => API_KEY.length > 0

export function configNotice() {
  return 'The chatbot is not configured yet. Add VITE_OPENROUTER_API_KEY to a .env.local file in the project root and restart the dev server.'
}

export async function askBot(messages, signal) {
  if (!isConfigured()) {
    throw new Error(configNotice())
  }

  let response
  try {
    response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      signal,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': typeof window === 'undefined' ? 'http://localhost' : window.location.origin,
        'X-Title': 'B V Mithra Portfolio',
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.6,
        max_tokens: 700,
      }),
    })
  } catch (err) {
    if (err.name === 'AbortError') throw err
    throw new Error('Could not reach the AI service. Check your internet connection and try again.')
  }

  if (!response.ok) {
    let detail = ''
    try {
      const body = await response.json()
      detail =
        body?.error?.message ||
        body?.message ||
        (typeof body?.error === 'string' ? body.error : '')
    } catch {
      /* ignore parse failures */
    }

    if (response.status === 401) {
      throw new Error('Invalid API key. Update VITE_OPENROUTER_API_KEY in .env.local.')
    }
    if (response.status === 402) {
      throw new Error('The AI service has no credit left. Check your OpenRouter account.')
    }
    if (response.status === 429) {
      throw new Error('Too many requests right now. Please wait a few seconds and try again.')
    }
    throw new Error(detail || `The AI service returned an error (${response.status}).`)
  }

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('Received an unreadable response from the AI service. Please try again.')
  }

  const content = data?.choices?.[0]?.message?.content
  if (typeof content !== 'string' || content.trim() === '') {
    throw new Error('The assistant returned an empty reply. Please try again.')
  }

  return content.trim()
}

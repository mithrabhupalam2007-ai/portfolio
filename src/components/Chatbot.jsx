import { useEffect, useRef, useState } from 'react'
import { buildSystemPrompt, GREETING } from '../chatbot/knowledge.js'
import { askBot, isConfigured, MODEL } from '../chatbot/api.js'
import { profile } from '../data.js'
import { BotIcon, ChatIcon, CloseIcon, SendIcon } from './Icons.jsx'

const SUGGESTIONS = [
  'Who is Mithra?',
  'What are his skills?',
  'What has he built?',
  'How can I contact him?',
]

let messageSeq = 0

function createMessage(role, content, id) {
  return { id: id ?? `m-${++messageSeq}`, role, content }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([
    createMessage('assistant', GREETING, 'greeting'),
  ])

  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const abortRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, status, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => () => abortRef.current?.abort(), [])

  async function send(text) {
    const question = text.trim()
    if (!question || status === 'thinking') return

    setError('')
    setInput('')

    const history = [...messages, createMessage('user', question)]
    setMessages(history)
    setStatus('thinking')

    const controller = new AbortController()
    abortRef.current = controller

    const payload = [
      { role: 'system', content: buildSystemPrompt() },
      ...history.map(({ role, content }) => ({ role, content })),
    ]

    try {
      const reply = await askBot(payload, controller.signal)
      setMessages([...history, createMessage('assistant', reply)])
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setStatus('idle')
      abortRef.current = null
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      send(input)
    }
    if (event.key === 'Escape') setOpen(false)
  }

  const busy = status === 'thinking'

  return (
    <>
      <button
        type="button"
        className={`chat-fab${open ? ' chat-fab--hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open portfolio assistant"
      >
        <ChatIcon />
        <span className="chat-fab__dot" />
      </button>

      <div className={`chatbot${open ? ' chatbot--open' : ''}`} aria-hidden={!open}>
        <header className="chatbot__header">
          <span className="chatbot__avatar">
            <BotIcon />
          </span>
          <div className="chatbot__title">
            <strong>{profile.firstName}&apos;s Assistant</strong>
            <span>
              <i className="chatbot__status-dot" /> {busy ? 'typing…' : 'online'}
            </span>
          </div>
          <button
            type="button"
            className="chatbot__close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <CloseIcon />
          </button>
        </header>

        {!isConfigured() && (
          <p className="chatbot__notice">
            Chatbot not configured yet — add <code>VITE_OPENROUTER_API_KEY</code> to{' '}
            <code>.env.local</code>.
          </p>
        )}

        <div className="chatbot__messages" ref={scrollRef}>
          {messages.map((message) => (
            <div key={message.id} className={`bubble bubble--${message.role}`}>
              {message.content}
            </div>
          ))}

          {busy && (
            <div className="bubble bubble--assistant bubble--typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}

          {messages.length === 1 && !busy && (
            <div className="chatbot__suggestions">
              {SUGGESTIONS.map((text) => (
                <button key={text} type="button" onClick={() => send(text)}>
                  {text}
                </button>
              ))}
            </div>
          )}

          {error && (
            <div className="chatbot__error" role="alert">
              {error}
            </div>
          )}
        </div>

        <div className="chatbot__composer">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            placeholder="Ask about Mithra…"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            disabled={busy}
          />
          <button
            type="button"
            onClick={() => send(input)}
            disabled={busy || input.trim() === ''}
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </div>

        <footer className="chatbot__footer">
          Powered by <strong>{MODEL}</strong> · OpenRouter
        </footer>
      </div>
    </>
  )
}

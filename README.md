# B V Mithra — Portfolio

My personal portfolio website, built with **React** and **Vite**. A single-page site covering who I am, what I'm learning, the projects I'm building and how to reach me.

**Live repo:** [github.com/mithrabhupalam2007-ai/portfolio](https://github.com/mithrabhupalam2007-ai/portfolio)

---

## About me

👋 I'm **B V Mithra**, currently pursuing my **B.Tech in Computer Science & Engineering** at **Global Academy of Technology**. I enjoy building clean, responsive interfaces for the web and I'm actively looking for internships and collaboration opportunities.

---

## Sections

| Section | What's inside |
| --- | --- |
| **Hero** | Name, role, call-to-action buttons and social links |
| **About** | Short introduction and quick facts |
| **Skills** | Languages, web technologies, tools and core CS topics |
| **Projects** | Cards linking to my repositories and demos |
| **Education** | Academic timeline |
| **Contact** | E-mail, GitHub and LinkedIn links |
| **Chatbot** | Floating AI assistant that answers questions about this portfolio |

---

## Tech stack

- [React 19](https://react.dev/) — UI library
- [Vite 8](https://vite.dev/) — dev server and build tool
- Plain **HTML**, **CSS3** and **JavaScript** — no UI framework, no CSS preprocessor
- [OpenRouter](https://openrouter.ai/) — AI chatbot inference (`google/gemma-4-31b-it:free`)
- [oxlint](https://oxc.rs/) — fast linting

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm, plus a free [OpenRouter API key](https://openrouter.ai/keys) if you want the chatbot working.

```bash
# 1. Clone the repository
git clone https://github.com/mithrabhupalam2007-ai/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Add your OpenRouter key (chatbot — optional but recommended)
cp .env.example .env.local
# then edit .env.local and paste your key

# 4. Start the dev server (with hot reload)
npm run dev
```

The site runs at `http://localhost:5173` by default.

### Other commands

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

---

## Project structure

```
portfolio/
├── index.html            # HTML shell, meta tags and fonts
├── .env.example          # Template for the chatbot API key
├── .env.local            # Your real key (git-ignored, create locally)
├── public/
│   └── favicon.svg       # Tab icon (BM monogram)
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Composes all sections
    ├── data.js           # ← all site content lives here
    ├── index.css         # Design tokens, base styles, buttons
    ├── App.css           # Section styles and responsive rules
    ├── chatbot/
    │   ├── knowledge.js  # Builds the AI's system prompt from data.js
    │   └── api.js        # OpenRouter client + error handling
    └── components/       # Navbar, Hero, About, Skills, Projects,
                          # Education, Contact, Chatbot, Footer, Icons
```

---

## AI chatbot

A floating assistant (bottom-right button) answers visitors' questions about this portfolio — studies, skills, projects, contact details and more.

**How it works**

- `src/chatbot/knowledge.js` generates the model's system prompt **from `src/data.js`**, so the bot always knows exactly what's on the site. Change `data.js` → the bot learns it too.
- `src/chatbot/api.js` calls OpenRouter's OpenAI-compatible endpoint. OpenRouter sends `access-control-allow-origin: *`, so the browser can call it directly — no backend required.
- Model: `google/gemma-4-31b-it:free` (costs $0).
- The bot only answers questions about me, and admits it when it doesn't know something.

**Setup**

```bash
cp .env.example .env.local      # once
# paste your key into .env.local:
#   VITE_OPENROUTER_API_KEY=sk-or-v1-...
npm run dev
```

`.env.local` is ignored by git (via the `*.local` rule), so the key is never committed.

> ⚠️ **Security note:** Vite inlines `VITE_*` variables into the public JavaScript bundle, so anyone can read the key in the browser. That's acceptable for a free model, but **keep a spend limit / low credit balance** on the key in the [OpenRouter dashboard](https://openrouter.ai/settings/keys), and rotate it if it gets abused. For a paid model, put a serverless proxy in front instead.

Without a key the site still works — the chat shows a "not configured yet" notice.

---

## Customising the content

Everything you see on the site is driven by a single file: **`src/data.js`**.

Edit that file to update:

- Your name, role, tagline and location
- E-mail, GitHub and LinkedIn URLs
- About paragraphs and quick facts
- Skill groups
- Project cards (title, description, tags, source and demo links)
- Education entries

The chatbot reads this same file, so its answers update automatically.

Restyle the site by changing the CSS variables at the top of `src/index.css` (`--accent`, `--gradient`, `--bg`, fonts, and so on).

---

## Deploying to GitHub Pages

```bash
npm run build
```

Then publish the `dist/` folder. If you deploy to `https://<username>.github.io/portfolio/`, set the base path first in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

You can also enable **Settings → Pages → Source: GitHub Actions** and let a workflow build and publish on every push.

---

## License

Free to reuse with attribution. Built by B V Mithra.

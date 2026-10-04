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

---

## Tech stack

- [React 19](https://react.dev/) — UI library
- [Vite 8](https://vite.dev/) — dev server and build tool
- Plain **HTML**, **CSS3** and **JavaScript** — no UI framework, no CSS preprocessor
- [oxlint](https://oxc.rs/) — fast linting

---

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/mithrabhupalam2007-ai/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (with hot reload)
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
├── public/
│   └── favicon.svg       # Tab icon (BM monogram)
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Composes all sections
    ├── data.js           # ← all site content lives here
    ├── index.css         # Design tokens, base styles, buttons
    ├── App.css           # Section styles and responsive rules
    └── components/       # Navbar, Hero, About, Skills,
                          # Projects, Education, Contact, Footer, Icons
```

---

## Customising the content

Everything you see on the site is driven by a single file: **`src/data.js`**.

Edit that file to update:

- Your name, role, tagline and location
- E-mail, GitHub and LinkedIn URLs (`src/data.js` still has a LinkedIn placeholder to replace)
- About paragraphs and quick facts
- Skill groups
- Project cards (title, description, tags, source and demo links)
- Education entries

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

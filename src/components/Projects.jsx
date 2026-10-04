import { projects } from '../data.js'
import { ExternalIcon, GithubIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">03 — Projects</p>
          <h2 className="section__title">Things I&apos;ve built</h2>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__top">
                <span className="project-card__icon">
                  <GithubIcon />
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    <GithubIcon /> Source
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalIcon /> Live demo
                  </a>
                )}
                {!project.source && !project.demo && <span className="muted">Coming soon</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

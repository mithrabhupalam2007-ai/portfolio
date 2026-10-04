import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, PinIcon, SparkIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <SparkIcon className="hero__badge-icon" />
            Open to internships
          </span>

          <p className="hero__hello">Hello, my name is</p>

          <h1 className="hero__title gradient-text">{profile.name}</h1>

          <h2 className="hero__role">
            {profile.role} <span>@ {profile.college}</span>
          </h2>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <PinIcon /> {profile.location}
            </span>
            <div className="hero__socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="E-mail">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-card__bar">
              <i />
              <i />
              <i />
              <span>mithra.js</span>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="c-kw">const</span> <span className="c-var">mithra</span> = {'{'}
                {'\n  '}<span className="c-key">name</span>: <span className="c-str">'{profile.name}'</span>,{'\n  '}
                <span className="c-key">role</span>: <span className="c-str">'{profile.role}'</span>,{'\n  '}
                <span className="c-key">college</span>: <span className="c-str">'{profile.college}'</span>,{'\n  '}
                <span className="c-key">stack</span>: [<span className="c-str">'React'</span>, <span className="c-str">'Vite'</span>, <span className="c-str">'Git'</span>],{'\n  '}
                <span className="c-key">learning</span>: <span className="c-kw">true</span>,{'\n  '}
                <span className="c-key">hard_worker</span>: <span className="c-kw">true</span>,{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}

import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <header className="section__head section__head--center">
          <p className="section__eyebrow">05 — Contact</p>
          <h2 className="section__title">Let&apos;s connect</h2>
          <p className="section__sub">
            Have an internship, a project or just want to say hi? My inbox is always open —
            I&apos;ll get back to you as soon as I can.
          </p>
        </header>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

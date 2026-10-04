import { about, profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">01 — About</p>
          <h2 className="section__title">A bit about me</h2>
        </header>

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <ul className="about__facts">
            {about.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
            <li>
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

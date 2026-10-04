import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--soft">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">02 — Skills</p>
          <h2 className="section__title">What I work with</h2>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

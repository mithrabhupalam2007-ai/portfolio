import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section section--soft">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">04 — Education</p>
          <h2 className="section__title">My academic journey</h2>
        </header>

        <ol className="timeline">
          {education.map((item) => (
            <li className="timeline__item" key={item.degree}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>{item.degree}</h3>
                    <p className="timeline__institute">{item.institute}</p>
                  </div>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__highlights">{item.highlights}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

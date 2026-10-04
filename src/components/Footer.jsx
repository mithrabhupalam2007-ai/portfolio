import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon } from './Icons.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>

        <p className="footer__note">Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}

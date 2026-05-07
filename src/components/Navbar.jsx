import { personal } from "../data";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="nav-logo">{personal.name.split(" ")[0]}<span className="accent">.</span></span>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
        <li>
          <a href={personal.resumeLink} className="btn-outline" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

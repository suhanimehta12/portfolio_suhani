import { personal, social } from "../data";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">{personal.name}</h1>
        <h2 className="hero-title">{personal.title}</h2>
        <p className="hero-tagline">{personal.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
        <div className="hero-socials">
          {social.github   && <a href={social.github}   target="_blank" rel="noreferrer">GitHub</a>}
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {social.twitter  && <a href={social.twitter}  target="_blank" rel="noreferrer">Twitter</a>}
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-circle c1" />
        <div className="art-circle c2" />
        <div className="art-circle c3" />
      </div>
    </section>
  );
}

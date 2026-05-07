import { personal, social } from "../data";

export default function ContactSection() {
  return (
    <section className="section section-alt" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <p className="contact-intro">
          I'm currently open to internships and full-time roles. Whether you have a question or just want to say hi — my inbox is open!
        </p>
        <a href={`mailto:${personal.email}`} className="btn-primary lg">
          Say Hello →
        </a>
        <div className="contact-socials">
          {social.github   && <a href={social.github}   target="_blank" rel="noreferrer">GitHub</a>}
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {social.twitter  && <a href={social.twitter}  target="_blank" rel="noreferrer">Twitter</a>}
        </div>
      </div>
      <footer className="footer">
        <p>Built by {personal.name} • {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}

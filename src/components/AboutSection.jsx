import { personal } from "../data";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>{personal.bio}</p>
          <ul className="about-meta">
            <li><span className="label">Location</span>{personal.location}</li>
            <li><span className="label">Email</span><a href={`mailto:${personal.email}`}>{personal.email}</a></li>
          </ul>
        </div>
        {personal.avatar && (
          <div className="about-photo">
            <img src={personal.avatar} alt={personal.name} />
          </div>
        )}
      </div>
    </section>
  );
}

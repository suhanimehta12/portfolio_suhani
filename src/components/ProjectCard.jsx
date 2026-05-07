export default function ProjectCard({ project }) {
  const { title, description, techStack, features, github, live, featured } = project;

  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      {featured && <span className="badge">Featured</span>}
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <ul className="project-features">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <div className="project-stack">
        {techStack.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="project-links">
        {github && <a href={github} target="_blank" rel="noreferrer" className="btn-outline sm">GitHub</a>}
        {live   && <a href={live}   target="_blank" rel="noreferrer" className="btn-primary sm">Live Demo</a>}
      </div>
    </div>
  );
}

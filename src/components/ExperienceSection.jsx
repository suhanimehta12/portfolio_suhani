import { experience } from "../data";

export default function ExperienceSection() {
  return (
    <section className="section section-alt" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company} — {job.location}</p>
              <ul className="timeline-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

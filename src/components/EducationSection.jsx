import { education } from "../data";

export default function EducationSection() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <div className="edu-header">
              <h3>{edu.degree}</h3>
              <span className="timeline-period">{edu.period}</span>
            </div>
            <p className="edu-school">{edu.school}</p>
            {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}
            {edu.highlights && (
              <ul className="timeline-bullets">
                {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

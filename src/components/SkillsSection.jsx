import { skills } from "../data";

export default function SkillsSection() {
  return (
    <section className="section section-alt" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item} className="tag">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

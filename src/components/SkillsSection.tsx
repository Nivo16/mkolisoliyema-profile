const technicalSkills = [
  "HTML", "CSS", "JavaScript", "Vue.js", "Node.js", "Express.js",
  "MySQL", "Git", "Responsive Design", "Full Stack Development",
  "Oracle Apex", "Oracle SQL", "Microsoft Office",
];

const softSkills = [
  "Communication", "Leadership", "Problem Solving", "Data Analysis",
  "Team Collaboration", "Attention to Detail", "Time Management",
  "Analytical Thinking", "Adaptability",
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading text-center">
          My <span className="section-heading-accent">Skills</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-semibold text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-semibold text-foreground">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

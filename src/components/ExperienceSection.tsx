import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Sep 2025 – Present",
    title: "Full Stack Web Developer",
    company: "Life Choices Academy",
    items: [
      "Developing full-stack web applications using HTML, CSS, JavaScript, Vue.js, Node.js, Express.js, and MySQL.",
      "Collaborating in team-based projects to design and implement user-friendly interfaces and scalable systems.",
      "Built key projects: Frontend Development, Database & Backend, E-commerce Web Application.",
    ],
  },
  {
    period: "Feb – Mar 2026",
    title: "Web Developer Intern (Virtual)",
    company: "HexSoftware",
    items: [
      "Completed a virtual internship focused on front-end web development.",
      "Applied core web technologies to create interactive and responsive designs.",
      "Built and deployed: Personal Portfolio, Web Music Player, Book Library Application.",
    ],
  },
  {
    period: "Feb 2025 – Present",
    title: "Tutor",
    company: "Self-employed",
    items: [
      "Tutor Grade 8–12 learners in Mathematics and Physical Sciences.",
      "Develop customized lesson plans based on individual student needs.",
      "Track and support academic progress through continuous assessment.",
    ],
  },
  {
    period: "Feb 2023 – Nov 2024",
    title: "Laboratory Assistant",
    company: "University of the Western Cape",
    items: [
      "Prepared reagents and solutions; conducted sample preparation and experimental work.",
      "Trained first-year students on laboratory techniques and safety procedures.",
      "Ensured compliance with Good Laboratory Practice (GLP).",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-heading text-center">
          My <span className="section-heading-accent">Experience</span>
        </h2>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-5 top-1 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="card-hover rounded-xl border border-border bg-card p-6">
                  <span className="mb-2 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-primary flex items-center gap-1">
                    <Briefcase size={14} /> {exp.company}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

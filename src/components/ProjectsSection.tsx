import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ModernTechSolutions",
    type: "Full Stack Web Application",
    description:
      "A full-stack web application built with modern technologies, featuring a responsive frontend and a robust backend API with database integration.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/SizaMpafa/ModernTechSolutionsBackEnd.git",
  },
  {
    title: "Hobby In A Box",
    type: "E-Commerce Web Application",
    description:
      "A collaborative e-commerce platform enabling users to browse, search, and purchase hobby kits online with a seamless shopping experience.",
    tech: ["Vue.js", "Node.js", "Express.js", "MySQL", "CSS"],
    github: "https://github.com/phoenix-go-cawcaw/Group13-Module3-Project.git",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading text-center">
          My <span className="section-heading-accent">Projects</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover group rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <span className="mb-2 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit">
                {project.type}
              </span>
              <h3 className="mt-2 text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github size={16} /> View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

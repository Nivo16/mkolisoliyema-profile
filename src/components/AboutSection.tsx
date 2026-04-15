import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading text-center">
          About <span className="section-heading-accent">Me</span>
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Bio */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Motivated and adaptable BSc Chemistry graduate with growing experience in full-stack web development and tutoring. I bring a unique combination of analytical laboratory expertise and practical software development skills.
            </p>
            <p>
              Experienced in building responsive web applications, alongside a strong foundation in data analysis and problem-solving. Passionate about continuous learning, technology, and using both scientific and digital skills to solve real-world problems.
            </p>
          </div>
          {/* Info cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: GraduationCap, label: "Degree", value: "BSc Chemistry – UWC" },
              { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
              { icon: Mail, label: "Email", value: "mkolisoliyema@gmail.com" },
              { icon: Phone, label: "Phone", value: "067 803 3840" },
            ].map((item) => (
              <div
                key={item.label}
                className="card-hover flex items-start gap-3 rounded-xl bg-card p-5 border border-border"
              >
                <item.icon className="mt-0.5 shrink-0 text-primary" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

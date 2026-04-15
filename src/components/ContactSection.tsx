import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading">
          Get In <span className="section-heading-accent">Touch</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          I'm open to opportunities in web development, tutoring, and laboratory work. Let's connect!
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "mkolisoliyema@gmail.com", href: "mailto:mkolisoliyema@gmail.com" },
            { icon: Phone, label: "Phone", value: "067 803 3840", href: "tel:0678033840" },
            { icon: MapPin, label: "Location", value: "Cape Town, South Africa", href: undefined },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="card-hover flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <c.icon className="text-primary" size={22} />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
              <p className="text-sm font-medium text-foreground">{c.value}</p>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/liyema-mkoliso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Nivo16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

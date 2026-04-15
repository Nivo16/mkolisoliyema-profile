import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Construct mailto link as a simple fallback
    const mailtoLink = `mailto:mkolisoliyema@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="px-6 py-24 bg-card/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading text-center">
          Get In <span className="section-heading-accent">Touch</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground">
          I'm open to opportunities in web development, tutoring, and laboratory work. Let's connect!
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: "mkolisoliyema@gmail.com", href: "mailto:mkolisoliyema@gmail.com" },
              { icon: Phone, label: "Phone", value: "067 803 3840", href: "tel:0678033840" },
              { icon: MapPin, label: "Location", value: "Cape Town, South Africa", href: undefined },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <c.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="flex gap-4 pt-2">
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

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                maxLength={200}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="What's this about?"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-2 flex items-center justify-center gap-2 self-start"
            >
              {status === "sent" ? "Message Sent ✓" : status === "sending" ? "Opening Mail..." : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

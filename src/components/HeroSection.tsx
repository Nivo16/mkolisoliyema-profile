import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "I am a Full Stack Web Developer",
  "I am a Tutor",
  "I am a Lab Assistant",
];

export function HeroSection() {
  const typedText = useTypingAnimation(roles, 70, 40, 2000);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
        {/* Profile image */}
        <div className="relative shrink-0">
          <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-primary shadow-lg md:h-64 md:w-64"
               style={{ boxShadow: "0 0 40px var(--glow-primary)" }}>
            <img
              src={profileImg}
              alt="Liyema Mkoliso"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="gradient-text">Liyema Mkoliso</span>
          </h1>
          <div className="h-10 text-xl font-medium text-muted-foreground md:text-2xl">
            {typedText}
            <span className="typing-cursor" />
          </div>
          <p className="max-w-lg text-muted-foreground">
            BSc Chemistry graduate turned developer — blending analytical thinking with modern web technologies to build impactful solutions.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/Liyema_Mkoliso_CV.docx" download className="btn-outline">
              Download My CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}

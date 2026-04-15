import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Liyema Mkoliso | Full Stack Developer Portfolio" },
      { name: "description", content: "Portfolio of Liyema Mkoliso — Full Stack Web Developer, Tutor, and Lab Assistant based in Cape Town." },
      { property: "og:title", content: "Liyema Mkoliso | Portfolio" },
      { property: "og:description", content: "Full Stack Developer, Tutor & Lab Assistant" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

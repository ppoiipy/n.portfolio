import Navbar from "@/component/portfolio/Navbar";
import HeroSection from "@/component/portfolio/HeroSection";
import AboutSection from "@/component/portfolio/AboutSection";
import SkillsSection from "@/component/portfolio/SkillsSection";
import ProjectsSection from "@/component/portfolio/ProjectsSection";
import ContactSection from "@/component/portfolio/ContactSection";
import Footer from "@/component/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

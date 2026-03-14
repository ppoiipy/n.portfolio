import { useEffect, useState } from "react";
import { Globe, Cloud, Code2, Database, Server, Smartphone } from "lucide-react";
// import { Global } from "recharts";

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-20 gradient-bg ${className}`} />
);

const ParallaxElement = ({ 
  children, 
  className, 
  sensitivity = 0.05,
  mousePosition
}: {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number;
  mousePosition: { x: number; y: number };
}) => {
  const x = mousePosition.x * sensitivity;
  const y = mousePosition.y * sensitivity;
  
  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(174,62%,47%,0.06)] via-background to-[hsl(200,80%,55%,0.06)] animate-gradient-shift" />

      {/* Floating shapes with Parallax */}
      <ParallaxElement mousePosition={mousePosition} sensitivity={-0.02} className="-top-20 -right-20">
        <FloatingShape className="w-72 h-72 animate-float blur-3xl" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={0.03} className="bottom-20 -left-16">
        <FloatingShape className="w-56 h-56 animate-float-delayed blur-3xl" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={-0.04} className="top-1/3 right-1/4">
        <FloatingShape className="w-40 h-40 animate-float blur-2xl" />
      </ParallaxElement>

      {/* Floating Icons with Parallax */}
      <ParallaxElement mousePosition={mousePosition} sensitivity={0.05} className="top-1/4 left-[10%] hidden lg:block">
        <Code2 className="w-16 h-16 text-primary/30 animate-float" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={-0.06} className="bottom-1/3 right-[10%] hidden lg:block">
        <Database className="w-14 h-14 text-accent/30 animate-float-delayed" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={0.04} className="bottom-[15%] left-[20%] hidden lg:block">
        <Smartphone className="w-12 h-12 text-primary/30 animate-float" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={-0.03} className="top-[15%] right-[20%] hidden lg:block">
        <Server className="w-12 h-12 text-accent/30 animate-float-delayed" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={0.04} className="bottom-[15%] right-[25%] hidden lg:block">
        <Globe className="w-12 h-12 text-primary/30 animate-float" />
      </ParallaxElement>
      <ParallaxElement mousePosition={mousePosition} sensitivity={-0.03} className="top-[10%] left-[30%] hidden lg:block">
        <Cloud className="w-12 h-12 text-accent/30 animate-float-delayed" />
      </ParallaxElement>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="animate-fade-up text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Software Developer
        </p>
        <h1 className="animate-fade-up-delay-1 font-display text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          Natthakorn
        </h1>
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-4">
          Mobile &amp; Backend Specialist
        </p>
        <p className="animate-fade-up-delay-2 text-base text-muted-foreground max-w-lg mx-auto mb-10">
          Building scalable applications with modern technologies
        </p>
        <div className="animate-fade-up-delay-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity card-shadow"
          >
            View My Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

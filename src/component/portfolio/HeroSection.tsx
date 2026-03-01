const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-20 gradient-bg ${className}`} />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(174,62%,47%,0.06)] via-background to-[hsl(200,80%,55%,0.06)] animate-gradient-shift" />

      {/* Floating shapes */}
      <FloatingShape className="w-72 h-72 -top-20 -right-20 animate-float blur-3xl" />
      <FloatingShape className="w-56 h-56 bottom-20 -left-16 animate-float-delayed blur-3xl" />
      <FloatingShape className="w-40 h-40 top-1/3 right-1/4 animate-float blur-2xl" />

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

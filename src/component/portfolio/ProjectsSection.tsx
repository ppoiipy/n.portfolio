import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProjectsSection = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-14">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        {/* Featured Project */}
        <div className="bg-card rounded-3xl p-8 sm:p-10 card-shadow border border-border/50 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-bg text-primary-foreground mb-4">
                Featured
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">GinRaiDee</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Health &amp; Meal Recommendation App — An Android application powered by a Firebase
                backend and collaborative filtering algorithm. Helps users discover personalized
                meal plans based on dietary preferences and health goals.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Android", "Firebase", "Collaborative Filtering"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Phone mockup */}
            <div className="w-48 h-80 rounded-[2rem] gradient-bg-subtle border-2 border-primary/10 flex items-center justify-center flex-shrink-0">
              <div className="text-center px-4">
                <div className="text-4xl mb-2">🍽️</div>
                <p className="text-xs text-muted-foreground font-medium">App Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 card-shadow border border-border/50 hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-36 rounded-xl gradient-bg-subtle flex items-center justify-center mb-5">
                <span className="text-3xl">🚧</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                Exciting project in development. Stay tuned for updates!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

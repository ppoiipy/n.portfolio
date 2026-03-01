import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  { title: "Mobile", icon: "📱", skills: ["Flutter", "Android"] },
  { title: "Backend", icon: "⚙️", skills: ["Go", "Python", "REST APIs"] },
  { title: "Database", icon: "🗄️", skills: ["Firebase", "SQLite", "PostgreSQL"] },
  { title: "DevOps", icon: "🚀", skills: ["Docker", "CI/CD basics"] },
];

const SkillsSection = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6 bg-muted/40">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-14">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border/50"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-display font-semibold text-lg mb-3">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

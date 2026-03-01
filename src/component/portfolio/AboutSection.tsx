import { useScrollReveal } from "@/hooks/useScrollReveal";

const techs = ["Flutter", "Go", "Python", "Firebase", "REST API", "PostgreSQL", "Docker"];

const AboutSection = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I'm a passionate Software Developer with experience in building mobile applications,
          robust backend services, and scalable database architectures. I work across the full stack—
          from crafting fluid UIs in <strong className="text-foreground">Flutter</strong> to designing
          performant APIs in <strong className="text-foreground">Go</strong> and{" "}
          <strong className="text-foreground">Python</strong>. With a solid foundation in{" "}
          <strong className="text-foreground">Firebase</strong>, REST APIs, relational databases,
          and DevOps fundamentals, I deliver production-ready solutions that scale.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium gradient-bg-subtle text-primary border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

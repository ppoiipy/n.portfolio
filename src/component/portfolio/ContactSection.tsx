import { useScrollReveal } from "@/hooks/useScrollReveal";

const contacts = [
  { label: "Email", value: "natthakorn@email.com", href: "mailto:natthakorn@email.com", icon: "✉️" },
  { label: "GitHub", value: "github.com/ppoiipy", href: "https://github.com/ppoiipy", icon: "🐙" },
  { label: "Upwork", value: "upwork.com/Natthakorn", href: "https://www.upwork.com/freelancers/~01a110692623c9cd64?mp_source=share", icon: "💼" },
];

const ContactSection = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <div ref={ref} className="reveal max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Interested in working together? Let's connect.
        </p>
        <div className="grid gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl px-6 py-5 card-shadow border border-border/50 hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
                <p className="text-sm font-semibold">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

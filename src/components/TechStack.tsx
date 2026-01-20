import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Frontend",
      techs: [
        { name: "React.js", level: 95 },
        { name: "Flutter", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
      ]
    },
    {
      title: "Backend",
      techs: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "NestJS", level: 80 },
        { name: "MongoDB", level: 85 },
      ]
    },
    {
      title: "AI & Automation",
      techs: [
        { name: "LLMs", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "CrewAI", level: 75 },
        { name: "n8n", level: 80 },
      ]
    },
    {
      title: "DevOps & Tools",
      techs: [
        { name: "Firebase", level: 90 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 85 },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4">
            // TECH STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1 }}
              className="p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground text-sm font-medium border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {["Redux", "WebSockets", "REST APIs", "GraphQL", "Dart", "OutSystems", "Agile/Scrum", "DataTheorem", "ClickUp", "Jira"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-secondary/50 text-muted-foreground text-sm border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

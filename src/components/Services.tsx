import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Globe, Bot, Workflow, Rocket } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web apps with React, Next.js, and Node.js that scale with your business",
      tech: ["React.js", "Next.js", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with Flutter reaching millions of users",
      tech: ["Flutter", "Dart", "iOS/Android"]
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Intelligent chatbots, AI assistants, and LLM-powered automation systems",
      tech: ["LLMs", "LangChain", "OpenAI"]
    },
    {
      icon: Workflow,
      title: "Automation",
      description: "Streamlined workflows and automated processes using AI and low-code tools",
      tech: ["n8n", "CrewAI", "APIs"]
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Rapid prototyping and proof-of-concept development for startups",
      tech: ["Agile", "Scrum", "Fast Iteration"]
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4">
            // SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I Can <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From web and mobile apps to AI-driven solutions, I deliver end-to-end engineering for your digital products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:glow-primary transition-shadow">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-secondary/50 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

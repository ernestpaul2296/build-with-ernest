import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecializationsCarousel from "./SpecializationsCarousel";

const Hero = () => {
  const stats = [
    { value: "1M+", label: "Users Reached" },
    { value: "$45M+", label: "Annual Transactions" },
    { value: "545K+", label: "Active Users" },
    { value: "5+", label: "Years Experience" },
  ];

  const techCategories = [
    {
      label: "Programming Languages",
      techs: ["JavaScript", "TypeScript", "Python", "Dart"],
    },
    {
      label: "Frontend Technologies",
      techs: ["Flutter", "React.js", "Next.js", "OutSystems"],
    },
    {
      label: "Backend & Databases",
      techs: ["Node.js", "Express.js", "NestJS", "MongoDB"],
    },
    {
      label: "AI & Automation",
      techs: ["LLMs", "Generative AI", "Agentic AI", "LangChain", "CrewAI", "LangGraph", "n8n", "MCP"],
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-24 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to collaborations & new projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Ernest Paul</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto text-balance"
          >
            Full Stack Engineer crafting{" "}
            <span className="text-foreground font-medium">Web, Mobile & AI Solutions</span>{" "}
            that scale to millions of users
          </motion.p>

          {/* Specializations Carousel - moved above tech categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              What I <span className="gradient-text">Specialize</span> In
            </h2>
            <SpecializationsCarousel />
          </motion.div>

          {/* Tech categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-4 mb-12"
          >
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
                className="flex flex-wrap items-center justify-center gap-2"
              >
                <span className="text-sm font-semibold text-primary mr-2">{category.label}:</span>
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + catIndex * 0.1 + techIndex * 0.03 }}
                    className="px-3 py-1 rounded-md bg-secondary/50 text-muted-foreground text-sm font-mono border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground font-semibold px-8 glow-primary hover:glow-strong transition-shadow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/ernestpaul/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="text-center p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

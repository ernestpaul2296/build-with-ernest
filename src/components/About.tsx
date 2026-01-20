import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Code, Brain } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Users,
      title: "User-Centric",
      description: "Apps reaching 1M+ users across fintech and edtech"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "60% faster development with AI-powered tools"
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "End-to-end solutions from frontend to backend"
    },
    {
      icon: Brain,
      title: "AI-First",
      description: "Generative AI, LLMs, and intelligent automation"
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-mono text-sm mb-4"
            >
              // ABOUT ME
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Building the Future,{" "}
              <span className="gradient-text">One App at a Time</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg"
            >
              <p>
                I help businesses grow and scale by building Web, Mobile, and AI-powered solutions. My apps have reached <span className="text-foreground font-medium">1M+ users</span> across fintech and edtech, driving measurable outcomes and real business impact.
              </p>
              <p>
                In today's fast-paced digital world, I combine frontend engineering, backend architecture, and applied AI to create automated, scalable, and production-ready solutions.
              </p>
            </motion.div>

          </div>

          {/* Right - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

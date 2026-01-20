import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Smartphone, Layers, Bot, Zap, Brain, Rocket, Users } from "lucide-react";

const specializations = [
  {
    icon: Globe,
    title: "Web Applications that Convert Visitors into Customers",
    description: "Craft high-performance web experiences with React.js, Next.js, and Node.js — designed to boost engagement and drive measurable business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps that Scale to Millions",
    description: "Build cross-platform apps with Flutter that users love — delivering smooth, engaging, and scalable solutions across iOS and Android.",
  },
  {
    icon: Layers,
    title: "Full Stack Systems for Growing Startups",
    description: "From frontend to backend, I develop complete web ecosystems using the MERN stack — optimized for speed, scalability, and modern UX.",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions that Automate Workflows",
    description: "Harness LLMs, LangChain, and agentic AI to transform manual processes into intelligent, automated flows that save time and increase efficiency.",
  },
  {
    icon: Zap,
    title: "Low-Code & No-Code Builds That Launch Fast",
    description: "Rapidly prototype or deploy production apps using tools like OutSystems and n8n — cutting development time while maintaining quality and scalability.",
  },
  {
    icon: Brain,
    title: "Agentic AI Systems That Act, Learn, and Scale",
    description: "Create smart assistants, chatbots, and business agents using CrewAI, LangGraph, and generative models that continuously adapt to user needs.",
  },
  {
    icon: Rocket,
    title: "End-to-End Product Engineering with AI Acceleration",
    description: "Combine AI-assisted development tools (like Vercel v0.dev and TempoLabs) with full-stack expertise to ship features faster and smarter.",
  },
  {
    icon: Users,
    title: "Consulting & Collaboration for AI-First Businesses",
    description: "Partner with startups and enterprises to architect future-ready digital products that blend innovation, automation, and growth.",
  },
];

const SpecializationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % specializations.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentSpec = specializations[currentIndex];
  const Icon = currentSpec.icon;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {specializations.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Carousel container */}
      <div className="relative h-[340px] sm:h-[280px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <div className="h-full p-8 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center glow-primary group-hover:glow-strong transition-shadow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(specializations.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                {currentSpec.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {currentSpec.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + specializations.length) % specializations.length);
          }}
          className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % specializations.length);
          }}
          className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SpecializationsCarousel;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Smartphone, Bot, Zap } from "lucide-react";

const specializations = [
  {
    icon: Globe,
    title: "Web Apps",
    description: "I build high-performance web applications that convert visitors into paying customers, delivering increased revenue and user engagement for clients like yours.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "I build cross-platform mobile apps that scale to millions of users, delivering seamless iOS and Android experiences for clients like yours.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "I build intelligent AI-powered systems that automate complex workflows, delivering 10x efficiency gains and cost savings for clients like yours.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "I build end-to-end automation pipelines that eliminate manual processes, delivering faster turnaround and operational excellence for clients like yours.",
  },
];

interface SpecializationsCarouselProps {
  startAutoSwipe?: boolean;
}

const SpecializationsCarousel = ({ startAutoSwipe = false }: SpecializationsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!startAutoSwipe) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % specializations.length);
    }, 5000); // 5 seconds between swipes

    return () => clearInterval(timer);
  }, [startAutoSwipe]);

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

      {/* Carousel container - increased height */}
      <div className="relative h-[420px] sm:h-[360px] overflow-hidden">
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
            <div className="h-full p-10 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center glow-primary group-hover:glow-strong transition-shadow">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(specializations.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                {currentSpec.title}
              </h3>

              {/* Description - increased font size */}
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
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
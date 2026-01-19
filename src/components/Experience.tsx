import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Deriv",
      role: "Full Stack Software Engineer - AI | Flutter | React",
      period: "Jan 2024 - Present",
      location: "Dubai, UAE",
      type: "current",
      highlights: [
        "Engineered cross-platform trading and P2P money transfer apps with Flutter/Dart, scaling to 1M+ global downloads and 545K+ active users",
        "Deployed an end-to-end P2P platform enabling 85K+ monthly transactions and $45M+ annual deposits",
        "Accelerated development cycles by 60% using AI-powered tools with up to 90% code auto-generation",
        "Shipped AI-driven personalization and automation features with Generative AI + LLM integrations"
      ]
    },
    {
      company: "Deriv",
      role: "Full Stack Engineer | Scrum Master",
      period: "Dec 2022 - Dec 2023",
      location: "Dubai, UAE",
      type: "past",
      highlights: [
        "Led a team of 6 in implementing Scrum practices and enhancing team collaboration",
        "Created the complete P2P web platform using ReactJS, TypeScript, Redux, Firebase, WebSockets",
        "Integrated DataTheorem vulnerability scanning into CI/CD pipelines for security compliance",
        "Mentored team members in Agile methodologies, fostering a culture of collaboration"
      ]
    },
    {
      company: "Surfboard Payments",
      role: "Software Engineer",
      period: "Sep 2020 - Nov 2022",
      location: "Chennai, India",
      type: "past",
      highlights: [
        "Developed implementation roadmaps in collaboration with clients and design teams",
        "Optimized application architecture for performance and memory management",
        "Oversaw mobile app development team from conceptualization to production release",
        "Led hiring, training, and career development strategies for team members"
      ]
    },
    {
      company: "Notion Press Media",
      role: "Sales Consultant",
      period: "Jun 2019 - Jun 2020",
      location: "Chennai, India",
      type: "past",
      highlights: [
        "Led generation of 400 sales prospects monthly with strategic upselling techniques",
        "Established a presales team, optimized processes to increase paid sales prospects",
        "Collaborated with Global Sales Manager within a dynamic team of 30 professionals"
      ]
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
            // EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-border" />
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 ${
                exp.type === 'current' 
                  ? 'border-primary bg-primary/20' 
                  : 'border-muted-foreground/50 bg-background'
              }`}>
                {exp.type === 'current' && (
                  <span className="absolute inset-1 rounded-full bg-primary animate-pulse" />
                )}
              </div>

              {/* Content card */}
              <div className={`ml-4 p-6 rounded-2xl border transition-all duration-300 hover:border-primary/50 ${
                exp.type === 'current' 
                  ? 'gradient-card border-primary/30' 
                  : 'bg-card/50 border-border/50'
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                      {exp.type === 'current' && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

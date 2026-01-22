import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ernestpaul2296@gmail.com",
      href: "mailto:ernestpaul2296@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 52 889 6463",
      href: "tel:+971528896463"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ernest-paul",
      href: "https://www.linkedin.com/in/ernest-paul/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: null
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4">
            // LET'S CONNECT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm open to full-time roles, freelance projects, consulting, or collaborations in AI, automation, and full stack development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-10 py-6 text-lg glow-primary hover:glow-strong transition-shadow"
              asChild
            >
              <a href="mailto:ernestpaul2296@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Contact grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <method.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{method.value}</p>
                  </a>
                ) : (
                  <div className="block p-6 rounded-2xl gradient-card border border-border/50">
                    <method.icon className="w-6 h-6 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="text-sm font-medium">{method.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

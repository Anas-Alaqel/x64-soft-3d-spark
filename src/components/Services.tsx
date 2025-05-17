
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, icon, index }: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card p-6 sm:p-8 h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
      <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
        Learn more →
      </Button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business needs and challenges."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud architectures and migration services for improved performance and reliability."
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent systems that analyze data, learn patterns, and make autonomous decisions."
    },
    {
      icon: "🔐",
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your data and systems from threats."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive strategic business decisions."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-card/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80">
            We provide a comprehensive range of software development services to help businesses leverage technology for growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
            View All Services
          </Button>
        </motion.div>
        
        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Services;

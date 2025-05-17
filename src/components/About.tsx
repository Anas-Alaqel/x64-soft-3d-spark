
import { motion } from "framer-motion";

const AboutCard = ({ icon, title, description, delay }: { 
  icon: string;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 md:p-8 h-full"
    >
      <div className="text-3xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: "🚀",
      title: "Innovative Solutions",
      description: "We create cutting-edge software tailored to solve complex business challenges."
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Our development practices prioritize data protection and system security."
    },
    {
      icon: "🔄",
      title: "Agile Methodology",
      description: "We employ flexible development approaches to adapt to changing requirements."
    },
    {
      icon: "🌐",
      title: "Global Expertise",
      description: "Our team brings international experience to every project we undertake."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">x64-soft</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Founded on principles of innovation and technical excellence, x64-soft has been delivering transformative software solutions since 2015. Our team of experts combines deep technical knowledge with creative problem-solving to help businesses thrive in the digital era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AboutCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:border-r border-border">
                <div className="text-4xl font-bold gradient-text">150+</div>
                <p className="text-foreground/80 mt-2">Projects Completed</p>
              </div>
              <div className="text-center md:border-r border-border">
                <div className="text-4xl font-bold gradient-text">45+</div>
                <p className="text-foreground/80 mt-2">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">12+</div>
                <p className="text-foreground/80 mt-2">Countries Served</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

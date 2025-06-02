
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const AboutCard = ({ icon, titleKey, descriptionKey, delay, className = "" }: { 
  icon: string;
  titleKey: string;
  descriptionKey: string;
  delay: number;
  className?: string;
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card p-6 h-full ${className}`}
    >
      <div className="text-3xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{t(titleKey)}</h3>
      <p className="text-foreground/80">{t(descriptionKey)}</p>
    </motion.div>
  );
};

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "🚀",
      titleKey: "about.innovativeSolutions",
      descriptionKey: "about.innovativeSolutionsDesc"
    },
    {
      icon: "🔒",
      titleKey: "about.securityFirst",
      descriptionKey: "about.securityFirstDesc"
    },
    {
      icon: "🔄",
      titleKey: "about.agileMethodology",
      descriptionKey: "about.agileMethodologyDesc"
    },
    {
      icon: "🌐",
      titleKey: "about.globalExpertise",
      descriptionKey: "about.globalExpertiseDesc"
    }
  ];

  return (
    <section id="about" className="section-padding relative bg-mesh">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">{t("about.aboutX64")}</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80">
            {t("about.foundedText")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AboutCard
              key={index}
              icon={feature.icon}
              titleKey={feature.titleKey}
              descriptionKey={feature.descriptionKey}
              delay={index * 0.1}
              className={index % 2 === 0 ? "floating" : "pulse"}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 sm:p-8 md:p-10 rainbow-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="text-center md:border-r border-border">
                <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
                <p className="text-foreground/80 mt-2">{t("about.projectsCompleted")}</p>
              </div>
              <div className="text-center md:border-r border-border">
                <div className="text-3xl md:text-4xl font-bold gradient-text">45+</div>
                <p className="text-foreground/80 mt-2">{t("about.teamMembers")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">12+</div>
                <p className="text-foreground/80 mt-2">{t("about.countriesServed")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


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
      className={`glass-card p-4 sm:p-6 lg:p-8 h-full ${className}`}
    >
      <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-primary">{icon}</div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">{t(titleKey)}</h3>
      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{t(descriptionKey)}</p>
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative bg-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="gradient-text">{t("about.aboutX64")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed px-2 sm:px-4">
            {t("about.foundedText")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
          className="mt-12 sm:mt-16 lg:mt-20 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <div className="glass-card p-4 sm:p-6 lg:p-8 xl:p-10 rainbow-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center md:border-r border-border">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text">150+</div>
                <p className="text-sm sm:text-base text-foreground/80 mt-2">{t("about.projectsCompleted")}</p>
              </div>
              <div className="text-center md:border-r border-border">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text">45+</div>
                <p className="text-sm sm:text-base text-foreground/80 mt-2">{t("about.teamMembers")}</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text">12+</div>
                <p className="text-sm sm:text-base text-foreground/80 mt-2">{t("about.countriesServed")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

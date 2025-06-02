
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

const ServiceCard = ({ title, description, icon, index }: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card p-4 sm:p-6 lg:p-8 h-full flex flex-col"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/20 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 flex-grow leading-relaxed">{description}</p>
      <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary text-sm sm:text-base">
        {t("services.learnMore")} →
      </Button>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: "💻",
      titleKey: "services.customSoftware",
      descriptionKey: "services.customSoftwareDesc"
    },
    {
      icon: "📱",
      titleKey: "services.mobileApp",
      descriptionKey: "services.mobileAppDesc"
    },
    {
      icon: "☁️",
      titleKey: "services.cloud",
      descriptionKey: "services.cloudDesc"
    },
    {
      icon: "🤖",
      titleKey: "services.ai",
      descriptionKey: "services.aiDesc"
    },
    {
      icon: "🔐",
      titleKey: "services.cybersecurity",
      descriptionKey: "services.cybersecurityDesc"
    },
    {
      icon: "📊",
      titleKey: "services.dataAnalytics",
      descriptionKey: "services.dataAnalyticsDesc"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-background to-card/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="gradient-text">{t("services.title")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed px-2 sm:px-4">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4">
            {t("services.viewAll")}
          </Button>
        </motion.div>
        
        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-secondary/10 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Services;


import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { Button } from "@/components/ui/button";

const SolutionCard = ({ title, description, icon, index }: {
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
      className="glass-card p-6 sm:p-8 h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
      <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
        {t("services.learnMore")} →
      </Button>
    </motion.div>
  );
};

const Solutions = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      icon: "🏢",
      titleKey: "solutions.erp",
      descriptionKey: "solutions.erpDesc"
    },
    {
      icon: "👥",
      titleKey: "solutions.crm", 
      descriptionKey: "solutions.crmDesc"
    },
    {
      icon: "📊",
      titleKey: "solutions.bi",
      descriptionKey: "solutions.biDesc"
    },
    {
      icon: "🚚",
      titleKey: "solutions.scm",
      descriptionKey: "solutions.scmDesc"
    },
    {
      icon: "🏥",
      titleKey: "solutions.healthcare",
      descriptionKey: "solutions.healthcareDesc"
    },
    {
      icon: "🛒",
      titleKey: "solutions.ecommerce",
      descriptionKey: "solutions.ecommerceDesc"
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-background to-card/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">{t("solutions.title")}</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/80">
            {t("solutions.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={t(solution.titleKey)}
              description={t(solution.descriptionKey)}
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
            {t("solutions.viewAll")}
          </Button>
        </motion.div>
        
        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Solutions;

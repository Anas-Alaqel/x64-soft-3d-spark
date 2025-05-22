import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface SolutionsListProps {
  solutions: string[];
}

const SolutionsList = ({ solutions }: SolutionsListProps) => {
  const { t, currentLanguage } = useLanguage();
  
  // Map English solution keys to translation keys
  const getTranslationKey = (solution: string): string => {
    if (solution === "Enterprise Resource Planning") return "solutions.erp";
    if (solution === "Customer Relationship Management") return "solutions.crm";
    if (solution === "Business Intelligence Tools") return "solutions.bi";
    if (solution === "Supply Chain Management") return "solutions.scm";
    if (solution === "Healthcare Management Systems") return "solutions.healthcare";
    if (solution === "E-commerce Solutions") return "solutions.ecommerce";
    if (solution === "Fintech Applications") return "solutions.fintech";
    return solution;
  };

  // Arabic translations for the solutions if t() doesn't return a value
  const getArabicFallback = (solution: string): string => {
    if (solution === "Enterprise Resource Planning") return "تخطيط موارد المؤسسة";
    if (solution === "Customer Relationship Management") return "إدارة علاقات العملاء";
    if (solution === "Business Intelligence Tools") return "أدوات ذكاء الأعمال";
    if (solution === "Supply Chain Management") return "إدارة سلسلة التوريد";
    if (solution === "Healthcare Management Systems") return "أنظمة إدارة الرعاية الصحية";
    if (solution === "E-commerce Solutions") return "حلول التجارة الإلكترونية";
    if (solution === "Fintech Applications") return "تطبيقات التكنولوجيا المالية";
    return solution;
  };
  
  // Get the appropriate text based on language
  const getSolutionText = (solution: string): string => {
    const translationKey = getTranslationKey(solution);
    const translatedText = t(translationKey);
    
    // If translation exists, use it
    if (translatedText && translatedText !== translationKey) {
      return translatedText;
    }
    
    // If Arabic and no translation found, use Arabic fallback
    if (currentLanguage === "ar") {
      return getArabicFallback(solution);
    }
    
    // Otherwise return the original text
    return solution;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="order-2 lg:order-1"
    >
      <div className="max-w-md mx-auto lg:mx-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {t("solutions.title") || "حلولنا"}
        </h2>
        
        <ul className="space-y-4">
          {solutions.map((solution, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className={`mt-1.5 h-2 w-2 bg-primary rounded-full ${currentLanguage === "ar" ? "ml-3" : "mr-3"}`}></div>
              <p className={`text-base sm:text-lg ${currentLanguage === "ar" ? "" : "ms-3"}`}>
                {getSolutionText(solution)}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SolutionsList;

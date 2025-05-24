
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

const AnimatedText = () => {
  const { t } = useLanguage();
  
  return (
    <div className="animated-words-container overflow-hidden">
      <div className="animated-words-wrapper inline">
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0.8, 1] }}
          transition={{ 
            duration: 6,
            times: [0, 0.3, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 0
          }}
          className="inline-block animate-word"
        >
          <span className="bg-gradient-to-r from-primary to-[#9b87f5] text-transparent bg-clip-text animate-gradient">{t("hero.revolutionary")}</span>
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0.8, 1] }}
          transition={{ 
            duration: 6,
            times: [0, 0.3, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 2
          }}
          className="inline-block animate-word"
        >
          <span className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text animate-gradient">{t("hero.softwareSolutions")}</span>
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0.8, 1] }}
          transition={{ 
            duration: 6,
            times: [0, 0.3, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 4
          }}
          className="inline-block animate-word"
        >
          <span className="bg-gradient-to-r from-[#D946EF] to-primary text-transparent bg-clip-text animate-gradient">{t("hero.modernBusinesses")}</span>
        </motion.span>
      </div>
    </div>
  );
};

export default AnimatedText;

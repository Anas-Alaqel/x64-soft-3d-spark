
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

const AnimatedText = () => {
  const { t, currentLanguage } = useLanguage();
  
  const words = [
    {
      text: t("hero.revolutionary"),
      gradient: "from-primary via-blue-500 to-primary",
      delay: 0
    },
    {
      text: t("hero.softwareSolutions"),
      gradient: "from-accent via-purple-500 to-accent",
      delay: 2
    },
    {
      text: t("hero.modernBusinesses"),
      gradient: "from-primary via-cyan-500 to-accent",
      delay: 4
    }
  ];
  
  return (
    <div className="animated-words-container overflow-hidden" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <div className="animated-words-wrapper">
        {words.map((word, index) => (
          <span key={index}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0.7, 1],
                y: [20, 0, 0, 0, 0],
                scale: [0.95, 1, 1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                times: [0, 0.2, 0.4, 0.7, 1],
                repeat: Infinity,
                repeatType: "loop",
                delay: word.delay,
                ease: "easeInOut"
              }}
              className="inline-block animate-word relative"
            >
              <span className={`bg-gradient-to-r ${word.gradient} text-transparent bg-clip-text animate-gradient font-extrabold tracking-tight relative z-10`}>
                {word.text}
              </span>
              <motion.span 
                className={`absolute inset-0 bg-gradient-to-r ${word.gradient} text-transparent bg-clip-text blur-sm opacity-50 font-extrabold tracking-tight`}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {word.text}
              </motion.span>
            </motion.span>
            {index < words.length - 1 && " "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;

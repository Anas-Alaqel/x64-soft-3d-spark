
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { useLanguage } from "../LanguageProvider";

const HeroContent = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-4 md:space-y-6 px-4 sm:px-0"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <AnimatedText />
      </h1>
      
      <p className="text-base sm:text-lg text-foreground/80 max-w-lg">
        {t("hero.description")}
      </p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
          {t("hero.discoverSolutions")}
        </Button>
        <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/20">
          {t("hero.contactUs")}
        </Button>
      </div>
      
      <div className="pt-6 sm:pt-8">
        <p className="text-sm text-foreground/60 mb-3">{t("hero.trustedBy")}</p>
        <div className="flex flex-wrap gap-4 sm:gap-8 opacity-70">
          <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
          <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
          <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
          <div className="h-6 sm:h-8 w-16 sm:w-24 bg-foreground/20 rounded-md"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;

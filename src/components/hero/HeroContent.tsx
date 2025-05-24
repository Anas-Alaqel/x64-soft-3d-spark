
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { useLanguage } from "../LanguageProvider";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroContent = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6 md:space-y-8 px-4 sm:px-0"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 backdrop-blur-sm"
      >
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("hero.tagline")}
        </span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <AnimatedText />
      </h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed"
      >
        {t("hero.description")}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <Button 
          size="lg" 
          className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold"
        >
          <span>{t("hero.discoverSolutions")}</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="group border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 h-14 px-8 text-lg font-semibold backdrop-blur-sm"
        >
          {t("hero.contactUs")}
          <motion.div
            className="ml-2 w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="pt-8 sm:pt-12"
      >
        <p className="text-sm text-foreground/60 mb-4 font-medium">{t("hero.trustedBy")}</p>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-8 sm:h-10 w-20 sm:w-28 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-lg relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

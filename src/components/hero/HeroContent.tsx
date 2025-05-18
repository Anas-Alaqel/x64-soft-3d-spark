
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-4 md:space-y-6 px-4 sm:px-0"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30"
      >
        <span className="text-sm font-medium text-primary">
          Advancing Technology. Empowering Businesses.
        </span>
      </motion.div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <AnimatedText />
      </h1>
      
      <p className="text-base sm:text-lg text-foreground/80 max-w-lg">
        x64-soft delivers cutting-edge software solutions that transform businesses through innovation, efficiency, and technological excellence.
      </p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
          Discover Solutions
        </Button>
        <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/20">
          Contact Us
        </Button>
      </div>
      
      <div className="pt-6 sm:pt-8">
        <p className="text-sm text-foreground/60 mb-3">Trusted by industry leaders</p>
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

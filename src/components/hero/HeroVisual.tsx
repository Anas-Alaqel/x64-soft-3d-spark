
import { motion } from "framer-motion";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden lg:block"
    >
      <div className="relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full filter blur-3xl"></div>
        
        <motion.div 
          className="glass-card card-shimmer p-6 md:p-8 relative z-10 rounded-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-accent"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-foreground/20 rounded"></div>
              <div className="h-4 w-full bg-foreground/10 rounded"></div>
              <div className="h-4 w-5/6 bg-foreground/15 rounded"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-foreground/5 rounded-lg"></div>
              <div className="h-20 bg-foreground/5 rounded-lg"></div>
            </div>
            
            <div className="pt-2 flex justify-end">
              <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;

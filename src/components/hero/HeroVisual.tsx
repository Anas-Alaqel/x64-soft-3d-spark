
import { motion } from "framer-motion";
import { Code, Database, Cpu, Globe } from "lucide-react";

const HeroVisual = () => {
  const features = [
    { icon: Code, label: "Development", color: "from-blue-500 to-blue-600" },
    { icon: Database, label: "Database", color: "from-green-500 to-green-600" },
    { icon: Cpu, label: "Processing", color: "from-purple-500 to-purple-600" },
    { icon: Globe, label: "Global", color: "from-orange-500 to-orange-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden lg:block relative"
    >
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full filter blur-3xl animate-pulse" />
        
        {/* Main Card */}
        <motion.div 
          className="glass-card p-8 relative z-10 rounded-3xl border-2 border-primary/20 shadow-2xl overflow-hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">x64-soft</h3>
                <p className="text-sm text-foreground/60">Platform</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
              <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" />
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-foreground/60">Uptime</div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-4 border border-accent/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-foreground/60">Support</div>
            </motion.div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="bg-foreground/5 rounded-xl p-3 border border-foreground/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-4 w-4 text-white" />
                </div>
                <div className="text-xs font-medium">{feature.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Project Progress</span>
              <span className="text-primary font-semibold">85%</span>
            </div>
            <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg"
            animate={{ 
              y: [0, 10, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;

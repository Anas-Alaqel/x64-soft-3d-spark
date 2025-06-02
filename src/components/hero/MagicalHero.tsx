
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Zap } from "lucide-react";

const MagicalHero = () => {
  const { t, currentLanguage } = useLanguage();

  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="min-h-screen relative overflow-hidden hero-magical flex items-center">
      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map((i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl opacity-30 animate-bounce" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full filter blur-3xl opacity-30 animate-bounce" />
      </div>

      <div className="container mx-auto relative z-20 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 md:space-y-8 px-4 sm:px-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-enhanced magical-card group cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-magical" />
              </motion.div>
              <span className="text-sm font-semibold text-magical neon-text">
                {t("hero.tagline")}
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-magical" />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.div
                className="overflow-hidden"
                dir={currentLanguage === "ar" ? "rtl" : "ltr"}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-magical neon-text"
                >
                  {t("hero.revolutionary")}
                </motion.span>
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-magical neon-text"
                >
                  {t("hero.softwareSolutions")}
                </motion.span>
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="block text-magical neon-text"
                >
                  {t("hero.modernBusinesses")}
                </motion.span>
              </motion.div>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed font-medium"
            >
              {t("hero.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="btn-magical h-14 px-8 text-lg font-semibold group magnetic"
              >
                <span>{t("hero.discoverSolutions")}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-enhanced border-2 border-pink-400/50 hover:border-pink-400 hover:bg-pink-400/10 h-14 px-8 text-lg font-semibold group magnetic holographic"
              >
                <span>{t("hero.contactUs")}</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2"
                >
                  <Zap className="w-5 h-5 text-pink-500" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="pt-8 sm:pt-12"
            >
              <p className="text-sm text-foreground/60 mb-4 font-medium">{t("hero.trustedBy")}</p>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-8 sm:h-10 w-20 sm:w-28 glass-enhanced rounded-lg relative overflow-hidden group cursor-pointer magical-card energy-orb"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: `linear-gradient(45deg, 
                        rgba(255, 107, 107, 0.2), 
                        rgba(78, 205, 196, 0.2), 
                        rgba(69, 183, 209, 0.2)
                      )`
                    }}
                  >
                    <div className="absolute inset-0 magical-gradient opacity-20" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="relative floating-3d">
              {/* Main Card */}
              <motion.div 
                className="magical-card morph-card p-8 relative z-10 rounded-3xl shadow-2xl overflow-hidden liquid-morph"
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl glass-enhanced flex items-center justify-center shadow-lg energy-orb magical-gradient">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-magical">x64-soft</h3>
                      <p className="text-sm text-foreground/60">Platform</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-red-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-yellow-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="h-3 w-3 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="glass-enhanced rounded-2xl p-4 border border-pink-400/20 magical-card"
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                  >
                    <div className="text-2xl font-bold text-magical neon-text">99.9%</div>
                    <div className="text-sm text-foreground/60">Uptime</div>
                  </motion.div>
                  <motion.div 
                    className="glass-enhanced rounded-2xl p-4 border border-cyan-400/20 magical-card"
                    whileHover={{ scale: 1.05, rotateY: -10 }}
                  >
                    <div className="text-2xl font-bold text-magical neon-text">24/7</div>
                    <div className="text-sm text-foreground/60">Support</div>
                  </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: "💻", label: "Development", color: "from-blue-500 to-purple-600" },
                    { icon: "🚀", label: "Performance", color: "from-pink-500 to-red-600" },
                    { icon: "🎨", label: "Design", color: "from-green-500 to-blue-600" },
                    { icon: "⚡", label: "Speed", color: "from-yellow-500 to-orange-600" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      className="glass-enhanced rounded-xl p-3 border border-foreground/10 hover:border-pink-400/30 transition-all duration-300 group cursor-pointer magical-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                        {feature.icon}
                      </div>
                      <div className="text-xs font-medium text-magical">{feature.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-magical font-semibold">Project Progress</span>
                    <span className="text-magical font-semibold">95%</span>
                  </div>
                  <div className="h-3 glass-enhanced rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full magical-gradient rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Floating Orbs */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 magical-gradient rounded-full shadow-lg energy-orb"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />

                <motion.div
                  className="absolute -bottom-6 -left-6 w-8 h-8 magical-gradient rounded-full shadow-lg energy-orb"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
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
        </div>
      </div>
    </section>
  );
};

export default MagicalHero;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const ERPHero = () => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                {currentLanguage === "ar" ? "حلول متطورة" : "Advanced Solutions"}
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">
                  {currentLanguage === "ar" ? "نظام" : "ERP"}
                </span>
                <span className="block gradient-text animate-gradient">
                  {currentLanguage === "ar" ? "ERP متطور" : "System"}
                </span>
                <span className="block text-foreground/80 text-3xl md:text-4xl">
                  {currentLanguage === "ar" ? "لمؤسستك" : "For Your Business"}
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                {currentLanguage === "ar" 
                  ? "حول مؤسستك إلى منظومة رقمية متكاملة مع نظام ERP الذكي الذي يدير جميع العمليات بكفاءة عالية"
                  : "Transform your organization into an integrated digital ecosystem with our smart ERP system that manages all operations efficiently"
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                {currentLanguage === "ar" ? "ابدأ الآن" : "Get Started"}
                <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group border-primary/20 hover:border-primary/40">
                <Play className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                {currentLanguage === "ar" ? "شاهد العرض التوضيحي" : "Watch Demo"}
              </Button>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">
                  {currentLanguage === "ar" ? "عميل راضي" : "Happy Clients"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-foreground/60">
                  {currentLanguage === "ar" ? "وقت التشغيل" : "Uptime"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-foreground/60">
                  {currentLanguage === "ar" ? "دعم فني" : "Support"}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="glass-card p-6 rounded-3xl shadow-glow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <div className="text-lg font-semibold">ERP Dashboard</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-xl">
                      <div className="text-sm text-foreground/60">Revenue</div>
                      <div className="text-2xl font-bold text-green-500">$124,250</div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-xl">
                      <div className="text-sm text-foreground/60">Orders</div>
                      <div className="text-2xl font-bold text-blue-500">1,840</div>
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-background/50 p-4 rounded-xl h-32 flex items-end justify-between gap-2">
                    {[65, 45, 78, 52, 89, 67, 72, 84].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 8 }}
                        animate={{ height: height }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="bg-gradient-to-t from-primary to-accent rounded-t-sm flex-1"
                      />
                    ))}
                  </div>
                  
                  {/* Activity List */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 bg-background/30 p-2 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-foreground/20 rounded w-3/4"></div>
                          <div className="h-2 bg-foreground/10 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
              >
                💰
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl shadow-lg flex items-center justify-center text-white text-xl"
              >
                📊
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERPHero;
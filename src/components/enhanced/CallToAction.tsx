
import { motion } from "framer-motion"
import { useLanguage } from "../LanguageProvider"
import { Button } from "../ui/button"
import { EnhancedCard } from "../ui/enhanced-card"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

const CallToAction = () => {
  const { currentLanguage } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EnhancedCard variant="glass" className="max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 border-2 border-secondary rounded-square rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border border-primary rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {currentLanguage === "ar" 
                  ? "هل أنت مستعد لبدء مشروعك؟" 
                  : "Ready to Start Your Project?"
                }
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {currentLanguage === "ar"
                  ? "دعنا نحول فكرتك إلى واقع رقمي مذهل. احصل على استشارة مجانية اليوم واكتشف كيف يمكننا مساعدتك"
                  : "Let us turn your idea into an amazing digital reality. Get a free consultation today and discover how we can help you"
                }
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 glow group px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {currentLanguage === "ar" ? "ابدأ المحادثة" : "Start Conversation"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {currentLanguage === "ar" ? "اتصل بنا" : "Call Us"}
                </Button>
              </motion.div>

              <motion.div 
                className="mt-8 flex items-center justify-center gap-8 text-sm text-foreground/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {currentLanguage === "ar" ? "استجابة سريعة" : "Quick Response"}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  {currentLanguage === "ar" ? "استشارة مجانية" : "Free Consultation"}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                  {currentLanguage === "ar" ? "دعم 24/7" : "24/7 Support"}
                </div>
              </motion.div>
            </div>
          </EnhancedCard>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

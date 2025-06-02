
import { motion } from "framer-motion"
import { useLanguage } from "../LanguageProvider"
import { Button } from "../ui/button"
import { EnhancedCard } from "../ui/enhanced-card"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

const CallToAction = () => {
  const { currentLanguage } = useLanguage()

  const handleWhatsAppClick = () => {
    const phoneNumber = "967774336315";
    const message = "مرحباً، أود الاستفسار عن خدماتكم";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+967774336315', '_self');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EnhancedCard variant="glass" className="max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 xl:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-6 sm:top-12 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute bottom-6 left-8 sm:bottom-8 sm:left-12 w-4 h-4 sm:w-6 sm:h-6 border-2 border-secondary rounded-square rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-10 sm:h-10 border border-primary rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 gradient-text"
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
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
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 glow group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {currentLanguage === "ar" ? "ابدأ المحادثة" : "Start Conversation"}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleCallClick}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {currentLanguage === "ar" ? "اتصل بنا" : "Call Us"}
                </Button>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-foreground/60"
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

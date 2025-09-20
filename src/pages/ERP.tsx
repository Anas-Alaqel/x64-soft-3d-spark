
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ERPHero from "@/components/erp/ERPHero";
import ERPFeatures from "@/components/erp/ERPFeatures";
import ERPBenefits from "@/components/erp/ERPBenefits";
import ERPTestimonials from "@/components/erp/ERPTestimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const ERPPage = () => {
  const { currentLanguage } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = "967774336315";
    const message = currentLanguage === "ar" 
      ? "مرحباً، أود الاستفسار عن نظام ERP الخاص بكم"
      : "Hello, I would like to inquire about your ERP system";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open("tel:+967774336315", '_self');
  };

  return (
    <div className="min-h-screen" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      
      {/* Hero Section */}
      <ERPHero />
      
      {/* Features Section */}
      <ERPFeatures />
      
      {/* Benefits Section */}
      <ERPBenefits />
      
      {/* Testimonials Section */}
      <ERPTestimonials />

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-12 md:p-16 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">
                    {currentLanguage === "ar" ? "ابدأ رحلتك الرقمية اليوم" : "Start Your Digital Journey Today"}
                  </span>
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                  {currentLanguage === "ar" 
                    ? "احصل على استشارة مجانية مع خبرائنا لتحديد احتياجات مؤسستك وتصميم نظام ERP مخصص يناسب طبيعة عملك"
                    : "Get a free consultation with our experts to identify your organization's needs and design a custom ERP system that suits your business nature"
                  }
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                  {currentLanguage === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
                  <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8"
                  onClick={handleCallClick}
                >
                  <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                  {currentLanguage === "ar" ? "اتصل بنا الآن" : "Call Us Now"}
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-border/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center gap-2 text-foreground/60">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {currentLanguage === "ar" ? "استشارة مجانية" : "Free Consultation"}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-foreground/60">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {currentLanguage === "ar" ? "دعم فني 24/7" : "24/7 Technical Support"}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-foreground/60">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {currentLanguage === "ar" ? "ضمان الجودة" : "Quality Guarantee"}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPPage;

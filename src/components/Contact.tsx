
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "./LanguageProvider";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "967774336315";
    const message = "مرحباً، أود الاستفسار عن خدماتكم";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/80 leading-relaxed px-2 sm:px-4">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 h-10 sm:h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 h-10 sm:h-12"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-4 sm:mb-6">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 h-10 sm:h-12"
                  required
                />
              </div>
              <div className="space-y-2 mb-4 sm:mb-6">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 resize-none min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-10 sm:h-12 text-sm sm:text-base">
                {t("contact.submit")}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="glass-card p-4 sm:p-6 flex items-start space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg">📍</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{t("contact.office")}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">{t("contact.officeAddress")}</p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg">📞</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{t("contact.phone")}</h3>
                <a 
                  href="tel:+967774336315" 
                  className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  +967 774336315
                </a>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">واتساب</h3>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 h-auto"
                  size="sm"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  تواصل عبر الواتساب
                </Button>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg">📧</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{t("contact.emailAddress")}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">info@x64-soft.com</p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg">⏰</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{t("contact.businessHours")}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">{t("contact.hoursDetails")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

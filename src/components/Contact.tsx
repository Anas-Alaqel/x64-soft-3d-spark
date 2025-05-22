
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "./LanguageProvider";

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

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-lg text-foreground/80">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50"
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
                    className="bg-background/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50"
                  required
                />
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {t("contact.submit")}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.office")}</h3>
                <p className="text-foreground/70">{t("contact.officeAddress")}</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.emailAddress")}</h3>
                <p className="text-foreground/70">info@x64-soft.com</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">⏰</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.businessHours")}</h3>
                <p className="text-foreground/70">{t("contact.hoursDetails")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

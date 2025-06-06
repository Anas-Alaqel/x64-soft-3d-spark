
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();
  
  const links = {
    company: [
      { key: "footer.about", href: "/about" },
      { key: "footer.careers", href: "#" },
      { key: "footer.blog", href: "#" },
      { key: "footer.partners", href: "#" }
    ],
    services: [
      { key: "footer.webDev", href: "#" },
      { key: "footer.mobileApps", href: "#" },
      { key: "footer.cloudSolutions", href: "#" },
      { key: "footer.aiServices", href: "#" }
    ],
    resources: [
      { key: "footer.documentation", href: "#" },
      { key: "footer.helpCenter", href: "#" },
      { key: "footer.caseStudies", href: "#" },
      { key: "footer.faqs", href: "#" }
    ],
    legal: [
      { key: "footer.privacy", href: "#" },
      { key: "footer.terms", href: "#" },
      { key: "footer.cookie", href: "#" },
      { key: "footer.gdpr", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "GitHub", icon: "GH" },
    { name: "Facebook", icon: "f" }
  ];

  return (
    <footer className="bg-card pt-12 md:pt-16 pb-6 md:pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4">x64-soft</h2>
              <p className="text-foreground/70 mb-6 max-w-md">
                {t("footer.description")}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href="#"
                    aria-label={link.name}
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <span>{link.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 md:space-y-3">
              {links.company.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 md:space-y-3">
              {links.services.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2 md:space-y-3">
              {links.legal.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-foreground/70 hover:text-foreground transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-10 md:mt-12 pt-6 md:pt-8 text-center text-foreground/60 text-sm"
        >
          <p>{t("footer.copyright")}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

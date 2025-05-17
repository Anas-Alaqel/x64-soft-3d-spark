
import { motion } from "framer-motion";

const Footer = () => {
  const links = {
    company: ["About", "Careers", "Blog", "Partners"],
    services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI Services"],
    resources: ["Documentation", "Help Center", "Case Studies", "FAQs"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "GitHub", icon: "GH" },
    { name: "Facebook", icon: "f" }
  ];

  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4">x64-soft</h2>
              <p className="text-foreground/70 mb-6 max-w-md">
                Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age.
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
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-foreground">
                    {link}
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
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-foreground">
                    {link}
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
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-foreground">
                    {link}
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
          className="border-t border-border mt-12 pt-8 text-center text-foreground/60 text-sm"
        >
          <p>© {new Date().getFullYear()} x64-soft. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

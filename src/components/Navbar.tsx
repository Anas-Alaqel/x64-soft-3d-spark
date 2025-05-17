
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">x64-soft</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex hover:bg-primary/20">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

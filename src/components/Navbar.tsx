
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#solutions", label: "Solutions" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 z-50 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-primary">x64</span>
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-bold gradient-text relative">
            <span className="relative z-10">x64-soft</span>
            <span className="absolute top-0 left-0 w-full h-full blur-sm opacity-70 text-primary">x64-soft</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 z-50">
          <LangToggle />
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:flex hover:bg-primary/20">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 hidden sm:flex">
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 z-40 bg-background dark:bg-background/95 backdrop-blur-lg ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col pt-20 px-6`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-border"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

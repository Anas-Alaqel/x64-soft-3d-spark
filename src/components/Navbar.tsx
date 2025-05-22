
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";
import { Menu, X, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { t } = useLanguage();

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

  const handleLogoHover = (e: React.MouseEvent) => {
    const element = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - element.left;
    const y = e.clientY - element.top;
    
    // Convert to rotation angles
    const rotateX = (y / element.height - 0.5) * 25;
    const rotateY = -(x / element.width - 0.5) * 25;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetLogoRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  const navLinks = [
    { href: "/about", label: t("navbar.about") || "عن الشركة" },
    { href: "/services", label: t("navbar.services") || "الخدمات" },
    { href: "/solutions", label: t("navbar.solutions") || "الحلول" },
    { href: "/contact", label: t("navbar.contact") || "اتصل بنا" }
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
        <Link 
          to="/" 
          className="flex items-center gap-2 z-50 group relative"
          onMouseMove={handleLogoHover}
          onMouseLeave={resetLogoRotation}
        >
          <motion.div 
            className="relative w-10 h-10 sm:w-12 sm:h-12 perspective-500"
            animate={{ 
              rotateX: rotation.x, 
              rotateY: rotation.y,
              z: rotation.x !== 0 || rotation.y !== 0 ? 10 : 0 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#9b87f5] to-accent rounded-lg filter blur-md opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-primary/10 rounded-lg backdrop-blur-sm border border-primary/30"></div>
            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5] animate-gradient">x64</span>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.span 
              className="text-xl sm:text-2xl font-bold gradient-text relative z-10"
              animate={{ 
                rotateX: rotation.x * 0.5, 
                rotateY: rotation.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <span>x64-soft</span>
            </motion.span>
            <span className="absolute top-0 left-0 w-full h-full text-xl sm:text-2xl font-bold blur-sm text-primary/60 animate-pulse">x64-soft</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              to={link.href} 
              className={`transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full ${
                location.pathname === link.href 
                  ? "text-primary after:w-full" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 z-50">
          <LangToggle />
          <ThemeToggle />
          <Button 
            variant="ghost" 
            className="hidden md:flex gap-1 hover:bg-primary/20"
            asChild
          >
            <Link to="/login">
              <LogIn className="w-4 h-4 mr-1" />
              {t("navbar.login") || "تسجيل الدخول"}
            </Link>
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 hidden sm:flex" 
          >
            {t("navbar.getStarted") || "ابدأ الآن"}
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
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={link.href}
                className={`text-lg font-medium py-2 border-b border-border block ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              variant="outline" 
              className="w-full" 
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/login">
                <LogIn className="w-4 h-4 mr-2" />
                {t("navbar.login") || "تسجيل الدخول"}
              </Link>
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              {t("navbar.getStarted") || "ابدأ الآن"}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

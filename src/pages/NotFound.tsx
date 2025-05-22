
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-5 p-6"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold gradient-text mb-4"
        >
          404
        </motion.div>
        <h1 className="text-2xl md:text-3xl font-semibold">{t("notFound.title")}</h1>
        <p className="text-foreground/70 max-w-md mx-auto">{t("notFound.description")}</p>
        <Button asChild className="mt-6">
          <Link to="/">{t("notFound.backToHome")}</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;

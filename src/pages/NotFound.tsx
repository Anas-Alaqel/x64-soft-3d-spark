
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

const NotFound = () => {
  const { t } = useLanguage();
  
  // Fallback texts if translations are not available
  const title = t("notFound.title") || "404 - الصفحة غير موجودة";
  const description = t("notFound.description") || "عذراً، الصفحة التي تبحث عنها غير موجودة.";
  const backToHome = t("notFound.backToHome") || "العودة إلى الصفحة الرئيسية";

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="text-center space-y-5 p-6">
        <div className="text-5xl md:text-7xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
        <p className="text-foreground/70 max-w-md mx-auto">{description}</p>
        <Button asChild className="mt-6">
          <Link to="/">{backToHome}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

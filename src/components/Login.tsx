
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: t("login.success"),
        description: t("login.welcome"),
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold">{t("login.title")}</h1>
        <div className="mt-2 text-muted-foreground">
          {t("login.noAccount")} <Button variant="link" className="p-0">{t("login.register")}</Button>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="email">{t("login.email")}</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@x64.com"
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">{t("login.password")}</Label>
            <Button variant="link" className="text-xs p-0">{t("login.forgotPassword")}</Button>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
              {t("login.submit")}...
            </div>
          ) : (
            t("login.submit")
          )}
        </Button>
      </motion.form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative mt-8 pt-8"
      >
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            x64-soft
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

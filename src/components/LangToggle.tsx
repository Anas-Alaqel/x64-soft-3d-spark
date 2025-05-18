
import { Globe } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function LangToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 relative group">
          <div className="absolute inset-0 bg-primary/10 scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></div>
          <Globe className="h-4 w-4" />
          <motion.span 
            className="absolute -top-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {language.toUpperCase()}
          </motion.span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-accent/20">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="hover:bg-primary/10">
          <span className={`${language === "en" ? "text-primary font-medium" : ""}`}>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")} className="hover:bg-primary/10">
          <span className={`${language === "ar" ? "text-primary font-medium" : ""}`}>العربية</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

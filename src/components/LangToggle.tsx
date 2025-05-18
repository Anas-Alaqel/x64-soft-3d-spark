
import { Globe } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LangToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-accent/20">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="hover:bg-primary/10">
          <span className={`${language === "en" ? "text-primary" : ""}`}>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")} className="hover:bg-primary/10">
          <span className={`${language === "ar" ? "text-primary" : ""}`}>العربية</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

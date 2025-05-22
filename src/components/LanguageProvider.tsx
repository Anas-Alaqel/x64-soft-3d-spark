
"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ar"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// الترجمات
const translations: Record<string, Record<Language, string>> = {
  "nav.home": {
    en: "Home",
    ar: "الرئيسية"
  },
  "nav.about": {
    en: "About",
    ar: "عن الشركة"
  },
  "nav.services": {
    en: "Services",
    ar: "الخدمات"
  },
  "nav.solutions": {
    en: "Solutions",
    ar: "الحلول"
  },
  "nav.contact": {
    en: "Contact",
    ar: "اتصل بنا"
  },
  "hero.title": {
    en: "Innovative Solutions for Modern Business",
    ar: "حلول مبتكرة للأعمال الحديثة"
  },
  "hero.subtitle": {
    en: "Transform your business with cutting-edge technology",
    ar: "حوّل أعمالك بأحدث التقنيات"
  },
  "hero.cta": {
    en: "Get Started",
    ar: "ابدأ الآن"
  },
  "about.title": {
    en: "About Us",
    ar: "عن الشركة"
  },
  "about.description": {
    en: "We are a team of experts dedicated to providing innovative solutions for businesses of all sizes.",
    ar: "نحن فريق من الخبراء مكرسون لتقديم حلول مبتكرة للشركات بكافة أحجامها."
  },
  "services.title": {
    en: "Our Services",
    ar: "خدماتنا"
  },
  "solutions.title": {
    en: "Our Solutions",
    ar: "حلولنا"
  },
  "solutions.erp": {
    en: "Enterprise Resource Planning",
    ar: "تخطيط موارد المؤسسات"
  },
  "solutions.crm": {
    en: "Customer Relationship Management",
    ar: "إدارة علاقات العملاء"
  },
  "solutions.bi": {
    en: "Business Intelligence Tools",
    ar: "أدوات ذكاء الأعمال"
  },
  "solutions.scm": {
    en: "Supply Chain Management",
    ar: "إدارة سلسلة التوريد"
  },
  "solutions.healthcare": {
    en: "Healthcare Management Systems",
    ar: "أنظمة إدارة الرعاية الصحية"
  },
  "solutions.ecommerce": {
    en: "E-commerce Solutions",
    ar: "حلول التجارة الإلكترونية"
  },
  "solutions.fintech": {
    en: "Fintech Applications",
    ar: "تطبيقات التكنولوجيا المالية"
  },
  "contact.title": {
    en: "Contact Us",
    ar: "اتصل بنا"
  },
  "contact.name": {
    en: "Name",
    ar: "الاسم"
  },
  "contact.email": {
    en: "Email",
    ar: "البريد الإلكتروني"
  },
  "contact.message": {
    en: "Message",
    ar: "الرسالة"
  },
  "contact.submit": {
    en: "Submit",
    ar: "إرسال"
  },
  "footer.copyright": {
    en: "© 2025 All rights reserved",
    ar: "© 2025 جميع الحقوق محفوظة"
  },
  "footer.privacy": {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية"
  },
  "footer.terms": {
    en: "Terms of Service",
    ar: "شروط الخدمة"
  }
}

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: (key: string) => key
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "x64-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  )

  // وظيفة الترجمة
  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  // تعيين اتجاه النص
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("rtl", "ltr")

    if (language === "ar") {
      root.classList.add("rtl")
      document.dir = "rtl";
    } else {
      root.classList.add("ltr")
      document.dir = "ltr";
    }
  }, [language])

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language)
      setLanguage(language)
    },
    t
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}

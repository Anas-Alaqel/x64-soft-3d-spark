
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
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Simplified translations structure
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "navbar.about": "About",
    "navbar.services": "Services",
    "navbar.solutions": "Solutions",
    "navbar.contact": "Contact",
    "navbar.login": "Login",
    "navbar.getStarted": "Get Started",
    
    // Hero section
    "hero.tagline": "Advancing Technology. Empowering Businesses",
    "hero.revolutionary": "Revolutionary",
    "hero.softwareSolutions": "Software Solutions",
    "hero.modernBusinesses": "for Modern Businesses",
    "hero.description": "x64-soft delivers cutting-edge software solutions that transform businesses through innovation, efficiency, and technological excellence.",
    "hero.discoverSolutions": "Discover Solutions",
    "hero.contactUs": "Contact Us",
    "hero.trustedBy": "Trusted by industry leaders",
    
    // About section
    "about.aboutX64": "About x64-soft",
    "about.foundedText": "Founded on principles of innovation and technical excellence, x64-soft has been delivering transformative software solutions since 2015. Our team of experts combines deep technical knowledge with creative problem-solving to help businesses thrive in the digital era.",
    "about.innovativeSolutions": "Innovative Solutions",
    "about.innovativeSolutionsDesc": "We create cutting-edge software tailored to solve complex business challenges.",
    "about.securityFirst": "Security First",
    "about.securityFirstDesc": "Our development practices prioritize data protection and system security.",
    "about.agileMethodology": "Agile Methodology",
    "about.agileMethodologyDesc": "We employ flexible development approaches to adapt to changing requirements.",
    "about.globalExpertise": "Global Expertise",
    "about.globalExpertiseDesc": "Our team brings international experience to every project we undertake.",
    "about.projectsCompleted": "Projects Completed",
    "about.teamMembers": "Team Members",
    "about.countriesServed": "Countries Served",
    
    // Services section
    "services.title": "Our Services",
    "services.subtitle": "We provide a comprehensive range of software development services to help businesses leverage technology for growth and innovation.",
    "services.customSoftware": "Custom Software Development",
    "services.customSoftwareDesc": "Tailored solutions designed to address your specific business needs and challenges.",
    "services.mobileApp": "Mobile App Development",
    "services.mobileAppDesc": "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    "services.cloud": "Cloud Solutions",
    "services.cloudDesc": "Scalable cloud architectures and migration services for improved performance and reliability.",
    "services.ai": "AI & Machine Learning",
    "services.aiDesc": "Intelligent systems that analyze data, learn patterns, and make autonomous decisions.",
    "services.cybersecurity": "Cybersecurity Services",
    "services.cybersecurityDesc": "Comprehensive security solutions to protect your data and systems from threats.",
    "services.dataAnalytics": "Data Analytics",
    "services.dataAnalyticsDesc": "Transform raw data into actionable insights that drive strategic business decisions.",
    "services.viewAll": "View All Services",
    "services.learnMore": "Learn more",
    
    // Solutions section
    "solutions.title": "Our Solutions",
    "solutions.subtitle": "Comprehensive business solutions designed to drive growth and innovation across all industries.",
    "solutions.erp": "Enterprise Resource Planning",
    "solutions.erpDesc": "Integrated business management solutions that streamline operations across all departments.",
    "solutions.crm": "Customer Relationship Management",
    "solutions.crmDesc": "Build stronger customer relationships with powerful CRM tools and analytics.",
    "solutions.bi": "Business Intelligence Tools",
    "solutions.biDesc": "Data-driven insights and advanced analytics to inform strategic business decisions.",
    "solutions.scm": "Supply Chain Management",
    "solutions.scmDesc": "Optimize your supply chain with intelligent tracking and management systems.",
    "solutions.healthcare": "Healthcare Management Systems",
    "solutions.healthcareDesc": "Digital health solutions that improve patient care and operational efficiency.",
    "solutions.ecommerce": "E-commerce Solutions",
    "solutions.ecommerceDesc": "Complete online retail platforms with integrated payment and inventory management.",
    "solutions.fintech": "Fintech Applications",
    "solutions.viewAll": "View All Solutions",
    
    // Contact section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have a project in mind or questions about our services? Reach out to us and our team will get back to you as soon as possible.",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.submit": "Send Message",
    "contact.office": "Office Location",
    "contact.officeAddress": "123 Tech Plaza, Innovation District, City, Country",
    "contact.phone": "Contact Number",
    "contact.emailAddress": "Email Address",
    "contact.businessHours": "Business Hours",
    "contact.hoursDetails": "Monday - Friday: 9:00 AM - 6:00 PM",
    
    // Login page
    "login.title": "Login to Your Account",
    "login.email": "Email",
    "login.password": "Password",
    "login.submit": "Login",
    "login.forgotPassword": "Forgot Password?",
    "login.noAccount": "Don't have an account?",
    "login.register": "Register",
    "login.success": "Login Successful",
    "login.welcome": "Welcome back to X64-soft!",
    
    // Footer
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.partners": "Partners",
    "footer.services": "Services",
    "footer.webDev": "Web Development",
    "footer.mobileApps": "Mobile Apps",
    "footer.cloudSolutions": "Cloud Solutions",
    "footer.aiServices": "AI Services",
    "footer.resources": "Resources",
    "footer.documentation": "Documentation",
    "footer.helpCenter": "Help Center",
    "footer.caseStudies": "Case Studies",
    "footer.faqs": "FAQs",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookie": "Cookie Policy",
    "footer.gdpr": "GDPR",
    "footer.copyright": "© 2025 All rights reserved",
    "footer.description": "Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age."
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عن الشركة",
    "nav.services": "الخدمات",
    "nav.solutions": "الحلول",
    "nav.contact": "اتصل بنا",
    "navbar.about": "عن الشركة",
    "navbar.services": "الخدمات",
    "navbar.solutions": "الحلول",
    "navbar.contact": "اتصل بنا",
    "navbar.login": "تسجيل الدخول",
    "navbar.getStarted": "ابدأ الآن",
    
    // Hero section
    "hero.tagline": "تطوير التكنولوجيا. تمكين الأعمال",
    "hero.revolutionary": "ثورية",
    "hero.softwareSolutions": "حلول برمجية",
    "hero.modernBusinesses": "للأعمال الحديثة",
    "hero.description": "تقدم إكس 64 سوفت حلولاً برمجية متطورة تحول الأعمال من خلال الابتكار والكفاءة والتميز التقني.",
    "hero.discoverSolutions": "اكتشف الحلول",
    "hero.contactUs": "تواصل معنا",
    "hero.trustedBy": "موثوق به من قبل رواد الصناعة",
    
    // About section
    "about.aboutX64": "عن شركة إكس 64 سوفت",
    "about.foundedText": "تأسست على مبادئ الابتكار والتميز التقني، قدمت إكس 64 سوفت حلولًا برمجية تحويلية منذ عام 2015. يجمع فريق الخبراء لدينا بين المعرفة التقنية العميقة وحل المشكلات بطرق إبداعية لمساعدة الشركات على الازدهار في العصر الرقمي.",
    "about.innovativeSolutions": "حلول مبتكرة",
    "about.innovativeSolutionsDesc": "نبتكر برمجيات متطورة مصممة خصيصًا لحل تحديات الأعمال المعقدة.",
    "about.securityFirst": "الأمان أولاً",
    "about.securityFirstDesc": "تعطي ممارسات التطوير لدينا الأولوية لحماية البيانات وأمان الأنظمة.",
    "about.agileMethodology": "منهجية أجايل",
    "about.agileMethodologyDesc": "نستخدم نهجًا مرنًا في التطوير للتكيف مع المتطلبات المتغيرة.",
    "about.globalExpertise": "خبرة عالمية",
    "about.globalExpertiseDesc": "يجلب فريقنا خبرة دولية لكل مشروع نقوم به.",
    "about.projectsCompleted": "المشاريع المنجزة",
    "about.teamMembers": "أعضاء الفريق",
    "about.countriesServed": "الدول المخدومة",
    
    // Services section
    "services.title": "خدماتنا",
    "services.subtitle": "نقدم مجموعة شاملة من خدمات تطوير البرمجيات لمساعدة الشركات على الاستفادة من التكنولوجيا للنمو والابتكار.",
    "services.customSoftware": "تطوير البرمجيات المخصصة",
    "services.customSoftwareDesc": "حلول مصممة خصيصًا لمعالجة احتياجات وتحديات عملك المحددة.",
    "services.mobileApp": "تطوير تطبيقات الجوال",
    "services.mobileAppDesc": "تطبيقات جوال أصلية ومتعددة المنصات تقدم تجارب استخدام استثنائية.",
    "services.cloud": "حلول سحابية",
    "services.cloudDesc": "بنية سحابية قابلة للتوسع وخدمات الترحيل لتحسين الأداء والموثوقية.",
    "services.ai": "الذكاء الاصطناعي والتعلم الآلي",
    "services.aiDesc": "أنظمة ذكية تحلل البيانات وتتعلم الأنماط وتتخذ قرارات مستقلة.",
    "services.cybersecurity": "خدمات الأمن السيبراني",
    "services.cybersecurityDesc": "حلول أمنية شاملة لحماية بياناتك وأنظمتك من التهديدات.",
    "services.dataAnalytics": "تحليل البيانات",
    "services.dataAnalyticsDesc": "تحويل البيانات الخام إلى رؤى قابلة للتنفيذ تدفع القرارات التجارية الاستراتيجية.",
    "services.viewAll": "عرض جميع الخدمات",
    "services.learnMore": "اعرف المزيد",
    
    // Solutions section
    "solutions.title": "حلولنا",
    "solutions.subtitle": "حلول أعمال شاملة مصممة لدفع النمو والابتكار في جميع الصناعات.",
    "solutions.erp": "تخطيط موارد المؤسسات",
    "solutions.erpDesc": "حلول إدارة الأعمال المتكاملة التي تبسط العمليات عبر جميع الأقسام.",
    "solutions.crm": "إدارة علاقات العملاء",
    "solutions.crmDesc": "بناء علاقات أقوى مع العملاء باستخدام أدوات CRM القوية والتحليلات.",
    "solutions.bi": "أدوات ذكاء الأعمال",
    "solutions.biDesc": "رؤى مدفوعة بالبيانات وتحليلات متقدمة لاتخاذ قرارات تجارية استراتيجية.",
    "solutions.scm": "إدارة سلسلة التوريد",
    "solutions.scmDesc": "تحسين سلسلة التوريد باستخدام أنظمة التتبع والإدارة الذكية.",
    "solutions.healthcare": "أنظمة إدارة الرعاية الصحية",
    "solutions.healthcareDesc": "حلول صحية رقمية تحسن رعاية المرضى والكفاءة التشغيلية.",
    "solutions.ecommerce": "حلول التجارة الإلكترونية",
    "solutions.ecommerceDesc": "منصات التجارة الإلكترونية الكاملة مع الدفع المتكامل وإدارة المخزون.",
    "solutions.fintech": "تطبيقات التكنولوجيا المالية",
    "solutions.viewAll": "عرض جميع الحلول",
    
    // Contact section
    "contact.title": "تواصل معنا",
    "contact.subtitle": "هل لديك مشروع في ذهنك أو أسئلة حول خدماتنا؟ تواصل معنا وسيرد فريقنا عليك في أقرب وقت ممكن.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.subject": "الموضوع",
    "contact.message": "رسالتك",
    "contact.submit": "إرسال الرسالة",
    "contact.office": "موقع المكتب",
    "contact.officeAddress": "123 ساحة التكنولوجيا، حي الابتكار، المدينة، البلد",
    "contact.phone": "رقم الاتصال",
    "contact.emailAddress": "عنوان البريد الإلكتروني",
    "contact.businessHours": "ساعات العمل",
    "contact.hoursDetails": "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً",
    
    // Login page
    "login.title": "تسجيل الدخول إلى حسابك",
    "login.email": "البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.submit": "تسجيل الدخول",
    "login.forgotPassword": "نسيت كلمة المرور؟",
    "login.noAccount": "ليس لديك حساب؟",
    "login.register": "التسجيل",
    "login.success": "تم تسجيل الدخول بنجاح",
    "login.welcome": "مرحبا بعودتك إلى إكس 64 سوفت!",
    
    // Footer
    "footer.company": "الشركة",
    "footer.about": "عن الشركة",
    "footer.careers": "وظائف",
    "footer.blog": "المدونة",
    "footer.partners": "شركاء",
    "footer.services": "الخدمات",
    "footer.webDev": "تطوير الويب",
    "footer.mobileApps": "تطبيقات الجوال",
    "footer.cloudSolutions": "حلول سحابية",
    "footer.aiServices": "خدمات الذكاء الاصطناعي",
    "footer.resources": "الموارد",
    "footer.documentation": "التوثيق",
    "footer.helpCenter": "مركز المساعدة",
    "footer.caseStudies": "دراسات الحالة",
    "footer.faqs": "الأسئلة الشائعة",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookie": "سياسة ملفات تعريف الارتباط",
    "footer.gdpr": "اللائحة العامة لحماية البيانات",
    "footer.copyright": "© 2025 جميع الحقوق محفوظة",
    "footer.description": "تمكين الشركات بحلول برمجية مبتكرة تدفع النمو والكفاءة في العصر الرقمي."
  }
}

const initialState: LanguageProviderState = {
  language: "en",
  currentLanguage: "en",
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

  // Translation function
  const t = (key: string): string => {
    const translation = translations[language]?.[key]
    return translation || key
  }

  // Set text direction
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("rtl", "ltr")

    if (language === "ar") {
      root.classList.add("rtl")
      document.dir = "rtl"
    } else {
      root.classList.add("ltr")
      document.dir = "ltr"
    }
  }, [language])

  const value = {
    language,
    currentLanguage: language,
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

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

// Translations
const translations = {
  ar: {
    // Navigation
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
    "navbar.about": {
      en: "About",
      ar: "عن الشركة"
    },
    "navbar.services": {
      en: "Services",
      ar: "الخدمات"
    },
    "navbar.solutions": {
      en: "Solutions",
      ar: "الحلول"
    },
    "navbar.contact": {
      en: "Contact",
      ar: "اتصل بنا"
    },
    "navbar.login": {
      en: "Login",
      ar: "تسجيل الدخول"
    },
    "navbar.getStarted": {
      en: "Get Started",
      ar: "ابدأ الآن"
    },
    
    // Hero section
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
    "hero.tagline": {
      en: "Advancing Technology. Empowering Businesses",
      ar: "تطوير التكنولوجيا. تمكين الأعمال"
    },
    "hero.revolutionary": {
      en: "Revolutionary",
      ar: "ثورية"
    },
    "hero.softwareSolutions": {
      en: "Software Solutions",
      ar: "حلول برمجية"
    },
    "hero.modernBusinesses": {
      en: "for Modern Businesses",
      ar: "للأعمال الحديثة"
    },
    "hero.description": {
      en: "x64-soft delivers cutting-edge software solutions that transform businesses through innovation, efficiency, and technological excellence.",
      ar: "تقدم إكس 64 سوفت حلولاً برمجية متطورة تحول الأعمال من خلال الابتكار والكفاءة والتميز التقني."
    },
    "hero.discoverSolutions": {
      en: "Discover Solutions",
      ar: "اكتشف الحلول"
    },
    "hero.contactUs": {
      en: "Contact Us",
      ar: "تواصل معنا"
    },
    "hero.trustedBy": {
      en: "Trusted by industry leaders",
      ar: "موثوق به من قبل رواد الصناعة"
    },
    
    // About section
    "about.title": {
      en: "About Us",
      ar: "عن الشركة"
    },
    "about.description": {
      en: "We are a team of experts dedicated to providing innovative solutions for businesses of all sizes.",
      ar: "نحن فريق من الخبراء مكرسون لتقديم حلول مبتكرة للشركات بكافة أحجامها."
    },
    "about.aboutX64": {
      en: "About x64-soft",
      ar: "عن شركة إكس 64 سوفت"
    },
    "about.foundedText": {
      en: "Founded on principles of innovation and technical excellence, x64-soft has been delivering transformative software solutions since 2015. Our team of experts combines deep technical knowledge with creative problem-solving to help businesses thrive in the digital era.",
      ar: "تأسست على مبادئ الابتكار والتميز التقني، قدمت إكس 64 سوفت حلولًا برمجية تحويلية منذ عام 2015. يجمع فريق الخبراء لدينا بين المعرفة التقنية العميقة وحل المشكلات بطرق إبداعية لمساعدة الشركات على الازدهار في العصر الرقمي."
    },
    "about.innovativeSolutions": {
      en: "Innovative Solutions",
      ar: "حلول مبتكرة"
    },
    "about.innovativeSolutionsDesc": {
      en: "We create cutting-edge software tailored to solve complex business challenges.",
      ar: "نبتكر برمجيات متطورة مصممة خصيصًا لحل تحديات الأعمال المعقدة."
    },
    "about.securityFirst": {
      en: "Security First",
      ar: "الأمان أولاً"
    },
    "about.securityFirstDesc": {
      en: "Our development practices prioritize data protection and system security.",
      ar: "تعطي ممارسات التطوير لدينا الأولوية لحماية البيانات وأمان الأنظمة."
    },
    "about.agileMethodology": {
      en: "Agile Methodology",
      ar: "منهجية أجايل"
    },
    "about.agileMethodologyDesc": {
      en: "We employ flexible development approaches to adapt to changing requirements.",
      ar: "نستخدم نهجًا مرنًا في التطوير للتكيف مع المتطلبات المتغيرة."
    },
    "about.globalExpertise": {
      en: "Global Expertise",
      ar: "خبرة عالمية"
    },
    "about.globalExpertiseDesc": {
      en: "Our team brings international experience to every project we undertake.",
      ar: "يجلب فريقنا خبرة دولية لكل مشروع نقوم به."
    },
    "about.projectsCompleted": {
      en: "Projects Completed",
      ar: "المشاريع المنجزة"
    },
    "about.teamMembers": {
      en: "Team Members",
      ar: "أعضاء الفريق"
    },
    "about.countriesServed": {
      en: "Countries Served",
      ar: "الدول المخدومة"
    },
    
    // Services section
    "services.title": {
      en: "Our Services",
      ar: "خدماتنا"
    },
    "services.subtitle": {
      en: "We provide a comprehensive range of software development services to help businesses leverage technology for growth and innovation.",
      ar: "نقدم مجموعة شاملة من خدمات تطوير البرمجيات لمساعدة الشركات على الاستفادة من التكنولوجيا للنمو والابتكار."
    },
    "services.customSoftware": {
      en: "Custom Software Development",
      ar: "تطوير البرمجيات المخصصة"
    },
    "services.customSoftwareDesc": {
      en: "Tailored solutions designed to address your specific business needs and challenges.",
      ar: "حلول مصممة خصيصًا لمعالجة احتياجات وتحديات عملك المحددة."
    },
    "services.mobileApp": {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الجوال"
    },
    "services.mobileAppDesc": {
      en: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      ar: "تطبيقات جوال أصلية ومتعددة المنصات تقدم تجارب استخدام استثنائية."
    },
    "services.cloud": {
      en: "Cloud Solutions",
      ar: "حلول سحابية"
    },
    "services.cloudDesc": {
      en: "Scalable cloud architectures and migration services for improved performance and reliability.",
      ar: "بنية سحابية قابلة للتوسع وخدمات الترحيل لتحسين الأداء والموثوقية."
    },
    "services.ai": {
      en: "AI & Machine Learning",
      ar: "الذكاء الاصطناعي والتعلم الآلي"
    },
    "services.aiDesc": {
      en: "Intelligent systems that analyze data, learn patterns, and make autonomous decisions.",
      ar: "أنظمة ذكية تحلل البيانات وتتعلم الأنماط وتتخذ قرارات مستقلة."
    },
    "services.cybersecurity": {
      en: "Cybersecurity Services",
      ar: "خدمات الأمن السيبراني"
    },
    "services.cybersecurityDesc": {
      en: "Comprehensive security solutions to protect your data and systems from threats.",
      ar: "حلول أمنية شاملة لحماية بياناتك وأنظمتك من التهديدات."
    },
    "services.dataAnalytics": {
      en: "Data Analytics",
      ar: "تحليل البيانات"
    },
    "services.dataAnalyticsDesc": {
      en: "Transform raw data into actionable insights that drive strategic business decisions.",
      ar: "تحويل البيانات الخام إلى رؤى قابلة للتنفيذ تدفع القرارات التجارية الاستراتيجية."
    },
    "services.viewAll": {
      en: "View All Services",
      ar: "عرض جميع الخدمات"
    },
    "services.learnMore": {
      en: "Learn more",
      ar: "اعرف المزيد"
    },
    
    // Solutions section
    "solutions.title": {
      en: "Our Solutions",
      ar: "حلولنا"
    },
    "solutions.subtitle": {
      en: "Comprehensive business solutions designed to drive growth and innovation across all industries.",
      ar: "حلول أعمال شاملة مصممة لدفع النمو والابتكار في جميع الصناعات."
    },
    "solutions.erp": {
      en: "Enterprise Resource Planning",
      ar: "تخطيط موارد المؤسسات"
    },
    "solutions.erpDesc": {
      en: "Integrated business management solutions that streamline operations across all departments.",
      ar: "حلول إدارة الأعمال المتكاملة التي تبسط العمليات عبر جميع الأقسام."
    },
    "solutions.crm": {
      en: "Customer Relationship Management",
      ar: "إدارة علاقات العملاء"
    },
    "solutions.crmDesc": {
      en: "Build stronger customer relationships with powerful CRM tools and analytics.",
      ar: "بناء علاقات أقوى مع العملاء باستخدام أدوات CRM القوية والتحليلات."
    },
    "solutions.bi": {
      en: "Business Intelligence Tools",
      ar: "أدوات ذكاء الأعمال"
    },
    "solutions.biDesc": {
      en: "Data-driven insights and advanced analytics to inform strategic business decisions.",
      ar: "رؤى مدفوعة بالبيانات وتحليلات متقدمة لاتخاذ قرارات تجارية استراتيجية."
    },
    "solutions.scm": {
      en: "Supply Chain Management",
      ar: "إدارة سلسلة التوريد"
    },
    "solutions.scmDesc": {
      en: "Optimize your supply chain with intelligent tracking and management systems.",
      ar: "تحسين سلسلة التوريد باستخدام أنظمة التتبع والإدارة الذكية."
    },
    "solutions.healthcare": {
      en: "Healthcare Management Systems",
      ar: "أنظمة إدارة الرعاية الصحية"
    },
    "solutions.healthcareDesc": {
      en: "Digital health solutions that improve patient care and operational efficiency.",
      ar: "حلول صحية رقمية تحسن رعاية المرضى والكفاءة التشغيلية."
    },
    "solutions.ecommerce": {
      en: "E-commerce Solutions",
      ar: "حلول التجارة الإلكترونية"
    },
    "solutions.ecommerceDesc": {
      en: "Complete online retail platforms with integrated payment and inventory management.",
      ar: "منصات التجارة الإلكترونية الكاملة مع الدفع المتكامل وإدارة المخزون."
    },
    "solutions.fintech": {
      en: "Fintech Applications",
      ar: "تطبيقات التكنولوجيا المالية"
    },
    "solutions.viewAll": {
      en: "View All Solutions",
      ar: "عرض جميع الحلول"
    },
    
    // Contact section
    "contact.title": {
      en: "Get In Touch",
      ar: "تواصل معنا"
    },
    "contact.subtitle": {
      en: "Have a project in mind or questions about our services? Reach out to us and our team will get back to you as soon as possible.",
      ar: "هل لديك مشروع في ذهنك أو أسئلة حول خدماتنا؟ تواصل معنا وسيرد فريقنا عليك في أقرب وقت ممكن."
    },
    "contact.name": {
      en: "Your Name",
      ar: "الاسم"
    },
    "contact.email": {
      en: "Your Email",
      ar: "البريد الإلكتروني"
    },
    "contact.subject": {
      en: "Subject",
      ar: "الموضوع"
    },
    "contact.message": {
      en: "Your Message",
      ar: "رسالتك"
    },
    "contact.submit": {
      en: "Send Message",
      ar: "إرسال الرسالة"
    },
    "contact.office": {
      en: "Office Location",
      ar: "موقع المكتب"
    },
    "contact.officeAddress": {
      en: "123 Tech Plaza, Innovation District, City, Country",
      ar: "123 ساحة التكنولوجيا، حي الابتكار، المدينة، البلد"
    },
    "contact.phone": {
      en: "Contact Number",
      ar: "رقم الاتصال"
    },
    "contact.emailAddress": {
      en: "Email Address",
      ar: "عنوان البريد الإلكتروني"
    },
    "contact.businessHours": {
      en: "Business Hours",
      ar: "ساعات العمل"
    },
    "contact.hoursDetails": {
      en: "Monday - Friday: 9:00 AM - 6:00 PM",
      ar: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً"
    },
    
    // Login page
    "login.title": {
      en: "Login to Your Account",
      ar: "تسجيل الدخول إلى حسابك"
    },
    "login.email": {
      en: "Email",
      ar: "البريد الإلكتروني"
    },
    "login.password": {
      en: "Password",
      ar: "كلمة المرور"
    },
    "login.submit": {
      en: "Login",
      ar: "تسجيل الدخول"
    },
    "login.forgotPassword": {
      en: "Forgot Password?",
      ar: "نسيت كلمة المرور؟"
    },
    "login.noAccount": {
      en: "Don't have an account?",
      ar: "ليس لديك حساب؟"
    },
    "login.register": {
      en: "Register",
      ar: "التسجيل"
    },
    "login.success": {
      en: "Login Successful",
      ar: "تم تسجيل الدخول بنجاح"
    },
    "login.welcome": {
      en: "Welcome back to X64-soft!",
      ar: "مرحبا بعودتك إلى إكس 64 سوفت!"
    },
    
    // 404 Page
    "notFound.title": {
      en: "Page Not Found",
      ar: "الصفحة غير موجودة"
    },
    "notFound.description": {
      en: "Sorry, the page you are looking for does not exist.",
      ar: "عذراً، الصفحة التي تبحث عنها غير موجودة."
    },
    "notFound.backToHome": {
      en: "Back to Home",
      ar: "العودة إلى الصفحة الرئيسية"
    },
    
    // Footer
    "footer.company": {
      en: "Company",
      ar: "الشركة"
    },
    "footer.about": {
      en: "About",
      ar: "عن الشركة"
    },
    "footer.careers": {
      en: "Careers",
      ar: "وظائف"
    },
    "footer.blog": {
      en: "Blog",
      ar: "المدونة"
    },
    "footer.partners": {
      en: "Partners",
      ar: "شركاء"
    },
    "footer.services": {
      en: "Services",
      ar: "الخدمات"
    },
    "footer.webDev": {
      en: "Web Development",
      ar: "تطوير الويب"
    },
    "footer.mobileApps": {
      en: "Mobile Apps",
      ar: "تطبيقات الجوال"
    },
    "footer.cloudSolutions": {
      en: "Cloud Solutions",
      ar: "حلول سحابية"
    },
    "footer.aiServices": {
      en: "AI Services",
      ar: "خدمات الذكاء الاصطناعي"
    },
    "footer.resources": {
      en: "Resources",
      ar: "الموارد"
    },
    "footer.documentation": {
      en: "Documentation",
      ar: "التوثيق"
    },
    "footer.helpCenter": {
      en: "Help Center",
      ar: "مركز المساعدة"
    },
    "footer.caseStudies": {
      en: "Case Studies",
      ar: "دراسات الحالة"
    },
    "footer.faqs": {
      en: "FAQs",
      ar: "الأسئلة الشائعة"
    },
    "footer.legal": {
      en: "Legal",
      ar: "قانوني"
    },
    "footer.privacy": {
      en: "Privacy Policy",
      ar: "سياسة الخصوصية"
    },
    "footer.terms": {
      en: "Terms of Service",
      ar: "شروط الخدمة"
    },
    "footer.cookie": {
      en: "Cookie Policy",
      ar: "سياسة ملفات تعريف الارتباط"
    },
    "footer.gdpr": {
      en: "GDPR",
      ar: "اللائحة العامة لحماية البيانات"
    },
    "footer.copyright": {
      en: "© 2025 All rights reserved",
      ar: "© 2025 جميع الحقوق محفوظة"
    },
    "footer.description": {
      en: "Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age.",
      ar: "تمكين الشركات بحلول برمجية مبتكرة تدفع النمو والكفاءة في العصر الرقمي."
    }
  },
  en: {
    // Navigation
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
    "navbar.about": {
      en: "About",
      ar: "عن الشركة"
    },
    "navbar.services": {
      en: "Services",
      ar: "الخدمات"
    },
    "navbar.solutions": {
      en: "Solutions",
      ar: "الحلول"
    },
    "navbar.contact": {
      en: "Contact",
      ar: "اتصل بنا"
    },
    "navbar.login": {
      en: "Login",
      ar: "تسجيل الدخول"
    },
    "navbar.getStarted": {
      en: "Get Started",
      ar: "ابدأ الآن"
    },
    
    // Hero section
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
    "hero.tagline": {
      en: "Advancing Technology. Empowering Businesses",
      ar: "تطوير التكنولوجيا. تمكين الأعمال"
    },
    "hero.revolutionary": {
      en: "Revolutionary",
      ar: "ثورية"
    },
    "hero.softwareSolutions": {
      en: "Software Solutions",
      ar: "حلول برمجية"
    },
    "hero.modernBusinesses": {
      en: "for Modern Businesses",
      ar: "للأعمال الحديثة"
    },
    "hero.description": {
      en: "x64-soft delivers cutting-edge software solutions that transform businesses through innovation, efficiency, and technological excellence.",
      ar: "تقدم إكس 64 سوفت حلولاً برمجية متطورة تحول الأعمال من خلال الابتكار والكفاءة والتميز التقني."
    },
    "hero.discoverSolutions": {
      en: "Discover Solutions",
      ar: "اكتشف الحلول"
    },
    "hero.contactUs": {
      en: "Contact Us",
      ar: "تواصل معنا"
    },
    "hero.trustedBy": {
      en: "Trusted by industry leaders",
      ar: "موثوق به من قبل رواد الصناعة"
    },
    
    // About section
    "about.title": {
      en: "About Us",
      ar: "عن الشركة"
    },
    "about.description": {
      en: "We are a team of experts dedicated to providing innovative solutions for businesses of all sizes.",
      ar: "نحن فريق من الخبراء مكرسون لتقديم حلول مبتكرة للشركات بكافة أحجامها."
    },
    "about.aboutX64": {
      en: "About x64-soft",
      ar: "عن شركة إكس 64 سوفت"
    },
    "about.foundedText": {
      en: "Founded on principles of innovation and technical excellence, x64-soft has been delivering transformative software solutions since 2015. Our team of experts combines deep technical knowledge with creative problem-solving to help businesses thrive in the digital era.",
      ar: "تأسست على مبادئ الابتكار والتميز التقني، قدمت إكس 64 سوفت حلولًا برمجية تحويلية منذ عام 2015. يجمع فريق الخبراء لدينا بين المعرفة التقنية العميقة وحل المشكلات بطرق إبداعية لمساعدة الشركات على الازدهار في العصر الرقمي."
    },
    "about.innovativeSolutions": {
      en: "Innovative Solutions",
      ar: "حلول مبتكرة"
    },
    "about.innovativeSolutionsDesc": {
      en: "We create cutting-edge software tailored to solve complex business challenges.",
      ar: "نبتكر برمجيات متطورة مصممة خصيصًا لحل تحديات الأعمال المعقدة."
    },
    "about.securityFirst": {
      en: "Security First",
      ar: "الأمان أولاً"
    },
    "about.securityFirstDesc": {
      en: "Our development practices prioritize data protection and system security.",
      ar: "تعطي ممارسات التطوير لدينا الأولوية لحماية البيانات وأمان الأنظمة."
    },
    "about.agileMethodology": {
      en: "Agile Methodology",
      ar: "منهجية أجايل"
    },
    "about.agileMethodologyDesc": {
      en: "We employ flexible development approaches to adapt to changing requirements.",
      ar: "نستخدم نهجًا مرنًا في التطوير للتكيف مع المتطلبات المتغيرة."
    },
    "about.globalExpertise": {
      en: "Global Expertise",
      ar: "خبرة عالمية"
    },
    "about.globalExpertiseDesc": {
      en: "Our team brings international experience to every project we undertake.",
      ar: "يجلب فريقنا خبرة دولية لكل مشروع نقوم به."
    },
    "about.projectsCompleted": {
      en: "Projects Completed",
      ar: "المشاريع المنجزة"
    },
    "about.teamMembers": {
      en: "Team Members",
      ar: "أعضاء الفريق"
    },
    "about.countriesServed": {
      en: "Countries Served",
      ar: "الدول المخدومة"
    },
    
    // Services section
    "services.title": {
      en: "Our Services",
      ar: "خدماتنا"
    },
    "services.subtitle": {
      en: "We provide a comprehensive range of software development services to help businesses leverage technology for growth and innovation.",
      ar: "نقدم مجموعة شاملة من خدمات تطوير البرمجيات لمساعدة الشركات على الاستفادة من التكنولوجيا للنمو والابتكار."
    },
    "services.customSoftware": {
      en: "Custom Software Development",
      ar: "تطوير البرمجيات المخصصة"
    },
    "services.customSoftwareDesc": {
      en: "Tailored solutions designed to address your specific business needs and challenges.",
      ar: "حلول مصممة خصيصًا لمعالجة احتياجات وتحديات عملك المحددة."
    },
    "services.mobileApp": {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الجوال"
    },
    "services.mobileAppDesc": {
      en: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      ar: "تطبيقات جوال أصلية ومتعددة المنصات تقدم تجارب استخدام استثنائية."
    },
    "services.cloud": {
      en: "Cloud Solutions",
      ar: "حلول سحابية"
    },
    "services.cloudDesc": {
      en: "Scalable cloud architectures and migration services for improved performance and reliability.",
      ar: "بنية سحابية قابلة للتوسع وخدمات الترحيل لتحسين الأداء والموثوقية."
    },
    "services.ai": {
      en: "AI & Machine Learning",
      ar: "الذكاء الاصطناعي والتعلم الآلي"
    },
    "services.aiDesc": {
      en: "Intelligent systems that analyze data, learn patterns, and make autonomous decisions.",
      ar: "أنظمة ذكية تحلل البيانات وتتعلم الأنماط وتتخذ قرارات مستقلة."
    },
    "services.cybersecurity": {
      en: "Cybersecurity Services",
      ar: "خدمات الأمن السيبراني"
    },
    "services.cybersecurityDesc": {
      en: "Comprehensive security solutions to protect your data and systems from threats.",
      ar: "حلول أمنية شاملة لحماية بياناتك وأنظمتك من التهديدات."
    },
    "services.dataAnalytics": {
      en: "Data Analytics",
      ar: "تحليل البيانات"
    },
    "services.dataAnalyticsDesc": {
      en: "Transform raw data into actionable insights that drive strategic business decisions.",
      ar: "تحويل البيانات الخام إلى رؤى قابلة للتنفيذ تدفع القرارات التجارية الاستراتيجية."
    },
    "services.viewAll": {
      en: "View All Services",
      ar: "عرض جميع الخدمات"
    },
    "services.learnMore": {
      en: "Learn more",
      ar: "اعرف المزيد"
    },
    
    // Solutions section
    "solutions.title": {
      en: "Our Solutions",
      ar: "حلولنا"
    },
    "solutions.subtitle": {
      en: "Comprehensive business solutions designed to drive growth and innovation across all industries.",
      ar: "حلول أعمال شاملة مصممة لدفع النمو والابتكار في جميع الصناعات."
    },
    "solutions.erp": {
      en: "Enterprise Resource Planning",
      ar: "تخطيط موارد المؤسسات"
    },
    "solutions.erpDesc": {
      en: "Integrated business management solutions that streamline operations across all departments.",
      ar: "حلول إدارة الأعمال المتكاملة التي تبسط العمليات عبر جميع الأقسام."
    },
    "solutions.crm": {
      en: "Customer Relationship Management",
      ar: "إدارة علاقات العملاء"
    },
    "solutions.crmDesc": {
      en: "Build stronger customer relationships with powerful CRM tools and analytics.",
      ar: "بناء علاقات أقوى مع العملاء باستخدام أدوات CRM القوية والتحليلات."
    },
    "solutions.bi": {
      en: "Business Intelligence Tools",
      ar: "أدوات ذكاء الأعمال"
    },
    "solutions.biDesc": {
      en: "Data-driven insights and advanced analytics to inform strategic business decisions.",
      ar: "رؤى مدفوعة بالبيانات وتحليلات متقدمة لاتخاذ قرارات تجارية استراتيجية."
    },
    "solutions.scm": {
      en: "Supply Chain Management",
      ar: "إدارة سلسلة التوريد"
    },
    "solutions.scmDesc": {
      en: "Optimize your supply chain with intelligent tracking and management systems.",
      ar: "تحسين سلسلة التوريد باستخدام أنظمة التتبع والإدارة الذكية."
    },
    "solutions.healthcare": {
      en: "Healthcare Management Systems",
      ar: "أنظمة إدارة الرعاية الصحية"
    },
    "solutions.healthcareDesc": {
      en: "Digital health solutions that improve patient care and operational efficiency.",
      ar: "حلول صحية رقمية تحسن رعاية المرضى والكفاءة التشغيلية."
    },
    "solutions.ecommerce": {
      en: "E-commerce Solutions",
      ar: "حلول التجارة الإلكترونية"
    },
    "solutions.ecommerceDesc": {
      en: "Complete online retail platforms with integrated payment and inventory management.",
      ar: "منصات التجارة الإلكترونية الكاملة مع الدفع المتكامل وإدارة المخزون."
    },
    "solutions.fintech": {
      en: "Fintech Applications",
      ar: "تطبيقات التكنولوجيا المالية"
    },
    "solutions.viewAll": {
      en: "View All Solutions",
      ar: "عرض جميع الحلول"
    },
    
    // Contact section
    "contact.title": {
      en: "Get In Touch",
      ar: "تواصل معنا"
    },
    "contact.subtitle": {
      en: "Have a project in mind or questions about our services? Reach out to us and our team will get back to you as soon as possible.",
      ar: "هل لديك مشروع في ذهنك أو أسئلة حول خدماتنا؟ تواصل معنا وسيرد فريقنا عليك في أقرب وقت ممكن."
    },
    "contact.name": {
      en: "Your Name",
      ar: "الاسم"
    },
    "contact.email": {
      en: "Your Email",
      ar: "البريد الإلكتروني"
    },
    "contact.subject": {
      en: "Subject",
      ar: "الموضوع"
    },
    "contact.message": {
      en: "Your Message",
      ar: "رسالتك"
    },
    "contact.submit": {
      en: "Send Message",
      ar: "إرسال الرسالة"
    },
    "contact.office": {
      en: "Office Location",
      ar: "موقع المكتب"
    },
    "contact.officeAddress": {
      en: "123 Tech Plaza, Innovation District, City, Country",
      ar: "123 ساحة التكنولوجيا، حي الابتكار، المدينة، البلد"
    },
    "contact.phone": {
      en: "Contact Number",
      ar: "رقم الاتصال"
    },
    "contact.emailAddress": {
      en: "Email Address",
      ar: "عنوان البريد الإلكتروني"
    },
    "contact.businessHours": {
      en: "Business Hours",
      ar: "ساعات العمل"
    },
    "contact.hoursDetails": {
      en: "Monday - Friday: 9:00 AM - 6:00 PM",
      ar: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً"
    },
    
    // Login page
    "login.title": {
      en: "Login to Your Account",
      ar: "تسجيل الدخول إلى حسابك"
    },
    "login.email": {
      en: "Email",
      ar: "البريد الإلكتروني"
    },
    "login.password": {
      en: "Password",
      ar: "كلمة المرور"
    },
    "login.submit": {
      en: "Login",
      ar: "تسجيل الدخول"
    },
    "login.forgotPassword": {
      en: "Forgot Password?",
      ar: "نسيت كلمة المرور؟"
    },
    "login.noAccount": {
      en: "Don't have an account?",
      ar: "ليس لديك حساب؟"
    },
    "login.register": {
      en: "Register",
      ar: "التسجيل"
    },
    "login.success": {
      en: "Login Successful",
      ar: "تم تسجيل الدخول بنجاح"
    },
    "login.welcome": {
      en: "Welcome back to X64-soft!",
      ar: "مرحبا بعودتك إلى إكس 64 سوفت!"
    },
    
    // 404 Page
    "notFound.title": {
      en: "Page Not Found",
      ar: "الصفحة غير موجودة"
    },
    "notFound.description": {
      en: "Sorry, the page you are looking for does not exist.",
      ar: "عذراً، الصفحة التي تبحث عنها غير موجودة."
    },
    "notFound.backToHome": {
      en: "Back to Home",
      ar: "العودة إلى الصفحة الرئيسية"
    },
    
    // Footer
    "footer.company": {
      en: "Company",
      ar: "الشركة"
    },
    "footer.about": {
      en: "About",
      ar: "عن الشركة"
    },
    "footer.careers": {
      en: "Careers",
      ar: "وظائف"
    },
    "footer.blog": {
      en: "Blog",
      ar: "المدونة"
    },
    "footer.partners": {
      en: "Partners",
      ar: "شركاء"
    },
    "footer.services": {
      en: "Services",
      ar: "الخدمات"
    },
    "footer.webDev": {
      en: "Web Development",
      ar: "تطوير الويب"
    },
    "footer.mobileApps": {
      en: "Mobile Apps",
      ar: "تطبيقات الجوال"
    },
    "footer.cloudSolutions": {
      en: "Cloud Solutions",
      ar: "حلول سحابية"
    },
    "footer.aiServices": {
      en: "AI Services",
      ar: "خدمات الذكاء الاصطناعي"
    },
    "footer.resources": {
      en: "Resources",
      ar: "الموارد"
    },
    "footer.documentation": {
      en: "Documentation",
      ar: "التوثيق"
    },
    "footer.helpCenter": {
      en: "Help Center",
      ar: "مركز المساعدة"
    },
    "footer.caseStudies": {
      en: "Case Studies",
      ar: "دراسات الحالة"
    },
    "footer.faqs": {
      en: "FAQs",
      ar: "الأسئلة الشائعة"
    },
    "footer.legal": {
      en: "Legal",
      ar: "قانوني"
    },
    "footer.privacy": {
      en: "Privacy Policy",
      ar: "سياسة الخصوصية"
    },
    "footer.terms": {
      en: "Terms of Service",
      ar: "شروط الخدمة"
    },
    "footer.cookie": {
      en: "Cookie Policy",
      ar: "سياسة ملفات تعريف الارتباط"
    },
    "footer.gdpr": {
      en: "GDPR",
      ar: "اللائحة العامة لحماية البيانات"
    },
    "footer.copyright": {
      en: "© 2025 All rights reserved",
      ar: "© 2025 جميع الحقوق محفوظة"
    },
    "footer.description": {
      en: "Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age.",
      ar: "تمكين الشركات بحلول برمجية مبتكرة تدفع النمو والكفاءة في العصر الرقمي."
    }
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
    return translations[key]?.[language] || key
  }

  // Set text direction
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

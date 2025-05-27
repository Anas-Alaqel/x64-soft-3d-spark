
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ERPPage = () => {
  const { t, currentLanguage } = useLanguage();

  const erpFeatures = [
    {
      title: currentLanguage === "ar" ? "إدارة الموارد المالية" : "Financial Management",
      description: currentLanguage === "ar" 
        ? "نظام شامل لإدارة الحسابات والمالية والميزانيات والتقارير المالية"
        : "Comprehensive system for managing accounts, finance, budgets, and financial reports",
      icon: "💰"
    },
    {
      title: currentLanguage === "ar" ? "إدارة الموارد البشرية" : "Human Resources",
      description: currentLanguage === "ar"
        ? "إدارة شاملة للموظفين والرواتب والحضور والإجازات والتدريب"
        : "Complete management of employees, payroll, attendance, leave, and training",
      icon: "👥"
    },
    {
      title: currentLanguage === "ar" ? "إدارة المخزون" : "Inventory Management",
      description: currentLanguage === "ar"
        ? "تتبع المخزون والمشتريات والمبيعات وإدارة المستودعات"
        : "Track inventory, purchases, sales, and warehouse management",
      icon: "📦"
    },
    {
      title: currentLanguage === "ar" ? "إدارة علاقات العملاء" : "Customer Relations",
      description: currentLanguage === "ar"
        ? "إدارة بيانات العملاء والمبيعات وخدمة العملاء"
        : "Manage customer data, sales, and customer service",
      icon: "🤝"
    },
    {
      title: currentLanguage === "ar" ? "التقارير والتحليلات" : "Reports & Analytics",
      description: currentLanguage === "ar"
        ? "تقارير تفصيلية وتحليلات ذكية لاتخاذ القرارات الصحيحة"
        : "Detailed reports and smart analytics for making the right decisions",
      icon: "📊"
    },
    {
      title: currentLanguage === "ar" ? "إدارة المشاريع" : "Project Management",
      description: currentLanguage === "ar"
        ? "تخطيط وتنفيذ ومتابعة المشاريع والمهام"
        : "Planning, execution, and monitoring of projects and tasks",
      icon: "🎯"
    }
  ];

  const benefits = [
    {
      title: currentLanguage === "ar" ? "توحيد العمليات" : "Unified Operations",
      description: currentLanguage === "ar"
        ? "دمج جميع عمليات الشركة في نظام واحد متكامل"
        : "Integrate all company operations into one unified system"
    },
    {
      title: currentLanguage === "ar" ? "زيادة الكفاءة" : "Increased Efficiency", 
      description: currentLanguage === "ar"
        ? "تحسين الإنتاجية وتقليل الوقت المستغرق في العمليات"
        : "Improve productivity and reduce time spent on operations"
    },
    {
      title: currentLanguage === "ar" ? "اتخاذ قرارات ذكية" : "Smart Decision Making",
      description: currentLanguage === "ar"
        ? "بيانات دقيقة في الوقت الفعلي لاتخاذ قرارات مدروسة"
        : "Accurate real-time data for making informed decisions"
    },
    {
      title: currentLanguage === "ar" ? "تقليل التكاليف" : "Cost Reduction",
      description: currentLanguage === "ar"
        ? "خفض التكاليف التشغيلية وتحسين العائد على الاستثمار"
        : "Reduce operational costs and improve return on investment"
    }
  ];

  return (
    <div className="min-h-screen" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">
                {currentLanguage === "ar" ? "أنظمة تخطيط موارد المؤسسات" : "Enterprise Resource Planning"}
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              {currentLanguage === "ar" 
                ? "حلول ERP متطورة لإدارة شاملة ومتكاملة لجميع موارد وعمليات مؤسستك"
                : "Advanced ERP solutions for comprehensive and integrated management of all your organization's resources and processes"
              }
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
              {currentLanguage === "ar" ? "احصل على عرض مخصص" : "Get Custom Quote"}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLanguage === "ar" ? "مميزات نظام ERP" : "ERP System Features"}
            </h2>
            <p className="text-lg text-foreground/70">
              {currentLanguage === "ar" 
                ? "مجموعة شاملة من الوحدات المتكاملة لإدارة جميع جوانب عملك"
                : "A comprehensive set of integrated modules to manage all aspects of your business"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full glass-card hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLanguage === "ar" ? "فوائد تطبيق نظام ERP" : "Benefits of ERP Implementation"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 rtl:space-x-reverse"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLanguage === "ar" ? "ابدأ رحلتك الرقمية اليوم" : "Start Your Digital Journey Today"}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              {currentLanguage === "ar" 
                ? "احصل على استشارة مجانية لتحديد احتياجات مؤسستك وتصميم نظام ERP مخصص لك"
                : "Get a free consultation to identify your organization's needs and design a custom ERP system for you"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {currentLanguage === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </Button>
              <Button size="lg" variant="outline">
                {currentLanguage === "ar" ? "عرض توضيحي مباشر" : "Live Demo"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPPage;

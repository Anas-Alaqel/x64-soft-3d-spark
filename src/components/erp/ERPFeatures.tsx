import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  DollarSign, 
  Users, 
  Package, 
  Handshake, 
  BarChart3, 
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Cloud,
  Cpu
} from "lucide-react";

const ERPFeatures = () => {
  const { currentLanguage } = useLanguage();

  const mainFeatures = [
    {
      title: currentLanguage === "ar" ? "إدارة الموارد المالية" : "Financial Management",
      description: currentLanguage === "ar" 
        ? "نظام شامل لإدارة الحسابات والمالية والميزانيات والتقارير المالية مع تتبع دقيق للتدفقات النقدية"
        : "Comprehensive system for managing accounts, finance, budgets and financial reports with accurate cash flow tracking",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      features: currentLanguage === "ar" ? ["المحاسبة العامة", "إدارة الميزانيات", "التقارير المالية", "تتبع النقدية"] 
        : ["General Accounting", "Budget Management", "Financial Reports", "Cash Tracking"]
    },
    {
      title: currentLanguage === "ar" ? "إدارة الموارد البشرية" : "Human Resources",
      description: currentLanguage === "ar"
        ? "إدارة شاملة للموظفين والرواتب والحضور والإجازات والتدريب مع نظام تقييم الأداء"
        : "Complete management of employees, payroll, attendance, leave and training with performance evaluation system",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      features: currentLanguage === "ar" ? ["إدارة الموظفين", "نظام الرواتب", "تتبع الحضور", "تقييم الأداء"] 
        : ["Employee Management", "Payroll System", "Attendance Tracking", "Performance Evaluation"]
    },
    {
      title: currentLanguage === "ar" ? "إدارة المخزون" : "Inventory Management",
      description: currentLanguage === "ar"
        ? "تتبع المخزون والمشتريات والمبيعات وإدارة المستودعات مع تحديثات فورية للكميات"
        : "Track inventory, purchases, sales and warehouse management with real-time quantity updates",
      icon: Package,
      color: "from-purple-500 to-violet-600",
      features: currentLanguage === "ar" ? ["تتبع المخزون", "إدارة المستودعات", "طلبات الشراء", "تحديثات فورية"] 
        : ["Inventory Tracking", "Warehouse Management", "Purchase Orders", "Real-time Updates"]
    },
    {
      title: currentLanguage === "ar" ? "إدارة علاقات العملاء" : "Customer Relations",
      description: currentLanguage === "ar"
        ? "إدارة بيانات العملاء والمبيعات وخدمة العملاء مع نظام متابعة شامل للعلاقات"
        : "Manage customer data, sales and customer service with comprehensive relationship tracking system",
      icon: Handshake,
      color: "from-orange-500 to-red-600",
      features: currentLanguage === "ar" ? ["قاعدة بيانات العملاء", "إدارة المبيعات", "خدمة العملاء", "متابعة العلاقات"] 
        : ["Customer Database", "Sales Management", "Customer Service", "Relationship Tracking"]
    },
    {
      title: currentLanguage === "ar" ? "التقارير والتحليلات" : "Reports & Analytics",
      description: currentLanguage === "ar"
        ? "تقارير تفصيلية وتحليلات ذكية لاتخاذ القرارات الصحيحة مع لوحة معلومات تفاعلية"
        : "Detailed reports and smart analytics for making the right decisions with interactive dashboard",
      icon: BarChart3,
      color: "from-teal-500 to-green-600",
      features: currentLanguage === "ar" ? ["تقارير مفصلة", "تحليلات ذكية", "لوحة معلومات", "رؤى الأعمال"] 
        : ["Detailed Reports", "Smart Analytics", "Interactive Dashboard", "Business Insights"]
    },
    {
      title: currentLanguage === "ar" ? "إدارة المشاريع" : "Project Management",
      description: currentLanguage === "ar"
        ? "تخطيط وتنفيذ ومتابعة المشاريع والمهام مع نظام تتبع متقدم للتقدم والإنجازات"
        : "Planning, execution and monitoring of projects and tasks with advanced progress and achievement tracking",
      icon: Target,
      color: "from-pink-500 to-rose-600",
      features: currentLanguage === "ar" ? ["تخطيط المشاريع", "تتبع المهام", "إدارة الفرق", "تقارير التقدم"] 
        : ["Project Planning", "Task Tracking", "Team Management", "Progress Reports"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: currentLanguage === "ar" ? "أداء فائق السرعة" : "Lightning Fast Performance",
      description: currentLanguage === "ar" ? "معالجة البيانات بسرعة البرق" : "Lightning-fast data processing"
    },
    {
      icon: Shield,
      title: currentLanguage === "ar" ? "أمان متقدم" : "Advanced Security",
      description: currentLanguage === "ar" ? "حماية عالية المستوى للبيانات" : "Enterprise-level data protection"
    },
    {
      icon: Globe,
      title: currentLanguage === "ar" ? "دعم متعدد اللغات" : "Multi-language Support",
      description: currentLanguage === "ar" ? "يدعم العربية والإنجليزية" : "Supports Arabic and English"
    },
    {
      icon: Smartphone,
      title: currentLanguage === "ar" ? "تطبيق محمول" : "Mobile App",
      description: currentLanguage === "ar" ? "تطبيق متجاوب للهواتف الذكية" : "Responsive mobile application"
    },
    {
      icon: Cloud,
      title: currentLanguage === "ar" ? "التخزين السحابي" : "Cloud Storage",
      description: currentLanguage === "ar" ? "نسخ احتياطية آمنة في السحابة" : "Secure cloud backups"
    },
    {
      icon: Cpu,
      title: currentLanguage === "ar" ? "ذكاء اصطناعي" : "AI Integration",
      description: currentLanguage === "ar" ? "تحليلات ذكية مدعومة بالذكاء الاصطناعي" : "AI-powered smart analytics"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            {currentLanguage === "ar" ? "المميزات الأساسية" : "Core Features"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              {currentLanguage === "ar" ? "نظام شامل ومتكامل" : "Complete Integrated System"}
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {currentLanguage === "ar" 
              ? "مجموعة شاملة من الوحدات المتكاملة والمتطورة لإدارة جميع جوانب عملك بكفاءة وفعالية عالية"
              : "A comprehensive set of advanced integrated modules to manage all aspects of your business efficiently and effectively"
            }
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-card hover-lift group relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-4 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((subFeature, subIndex) => (
                        <Badge 
                          key={subIndex} 
                          variant="secondary" 
                          className="text-xs bg-background/50 hover:bg-primary/10 transition-colors"
                        >
                          {subFeature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">
            {currentLanguage === "ar" ? "مميزات إضافية" : "Additional Features"}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 rtl:space-x-reverse bg-background/50 p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ERPFeatures;
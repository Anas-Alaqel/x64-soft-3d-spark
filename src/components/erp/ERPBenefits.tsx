import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield,
  Zap,
  Users,
  BarChart3,
  CheckCircle2
} from "lucide-react";

const ERPBenefits = () => {
  const { currentLanguage } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: currentLanguage === "ar" ? "زيادة الإنتاجية" : "Increased Productivity",
      description: currentLanguage === "ar"
        ? "تحسين الكفاءة التشغيلية وزيادة الإنتاجية بنسبة تصل إلى 40% من خلال أتمتة العمليات"
        : "Improve operational efficiency and increase productivity by up to 40% through process automation",
      percentage: "40%",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: currentLanguage === "ar" ? "توفير الوقت" : "Time Saving",
      description: currentLanguage === "ar"
        ? "تقليل الوقت المستغرق في العمليات اليومية بنسبة 60% من خلال التكامل والأتمتة"
        : "Reduce time spent on daily operations by 60% through integration and automation",
      percentage: "60%",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: DollarSign,
      title: currentLanguage === "ar" ? "تقليل التكاليف" : "Cost Reduction",
      description: currentLanguage === "ar"
        ? "خفض التكاليف التشغيلية بنسبة 35% وتحسين العائد على الاستثمار"
        : "Reduce operational costs by 35% and improve return on investment",
      percentage: "35%",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: currentLanguage === "ar" ? "اتخاذ قرارات أفضل" : "Better Decision Making",
      description: currentLanguage === "ar"
        ? "بيانات دقيقة في الوقت الفعلي لاتخاذ قرارات مدروسة وتحسين الأداء"
        : "Accurate real-time data for making informed decisions and improving performance",
      percentage: "95%",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const keyAdvantages = [
    {
      icon: Zap,
      title: currentLanguage === "ar" ? "أتمتة العمليات" : "Process Automation",
      items: currentLanguage === "ar" 
        ? ["تحديث تلقائي للبيانات", "تنبيهات ذكية", "سير عمل محسن", "تقارير آلية"]
        : ["Automatic data updates", "Smart notifications", "Optimized workflows", "Automated reports"]
    },
    {
      icon: Users,
      title: currentLanguage === "ar" ? "تحسين التعاون" : "Enhanced Collaboration",
      items: currentLanguage === "ar" 
        ? ["عمل جماعي أكثر فعالية", "مشاركة البيانات الفورية", "تنسيق بين الأقسام", "إدارة المشاريع المتكاملة"]
        : ["More effective teamwork", "Real-time data sharing", "Cross-department coordination", "Integrated project management"]
    },
    {
      icon: Shield,
      title: currentLanguage === "ar" ? "أمان البيانات" : "Data Security",
      items: currentLanguage === "ar" 
        ? ["تشفير متقدم", "نسخ احتياطية آمنة", "صلاحيات محددة", "حماية من الاختراق"]
        : ["Advanced encryption", "Secure backups", "Role-based permissions", "Breach protection"]
    },
    {
      icon: BarChart3,
      title: currentLanguage === "ar" ? "تحليلات متقدمة" : "Advanced Analytics",
      items: currentLanguage === "ar" 
        ? ["رؤى عميقة للأعمال", "تنبؤات ذكية", "تحليل الاتجاهات", "مؤشرات الأداء الرئيسية"]
        : ["Deep business insights", "Smart predictions", "Trend analysis", "Key performance indicators"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            {currentLanguage === "ar" ? "الفوائد والمميزات" : "Benefits & Advantages"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              {currentLanguage === "ar" ? "لماذا تختار نظام ERP؟" : "Why Choose ERP System?"}
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {currentLanguage === "ar" 
              ? "اكتشف كيف يمكن لنظام ERP أن يحول مؤسستك ويحقق نتائج مذهلة في الأداء والكفاءة"
              : "Discover how ERP system can transform your organization and achieve amazing results in performance and efficiency"
            }
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden group hover-lift glass-card">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} p-4 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                          {benefit.percentage}
                        </div>
                        <div className="text-sm text-foreground/60">
                          {currentLanguage === "ar" ? "تحسن" : "Improvement"}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8">
            {currentLanguage === "ar" ? "المزايا الأساسية" : "Key Advantages"}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyAdvantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-background/50 rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 group-hover:shadow-glow">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h4>
                  
                  <ul className="space-y-2">
                    {advantage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-center text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-green-500 ltr:mr-2 rtl:ml-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ERPBenefits;
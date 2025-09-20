import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/LanguageProvider";
import { Star, Quote } from "lucide-react";

const ERPTestimonials = () => {
  const { currentLanguage } = useLanguage();

  const testimonials = [
    {
      name: currentLanguage === "ar" ? "أحمد محمد" : "Ahmad Mohamed",
      role: currentLanguage === "ar" ? "المدير العام - شركة النور للتجارة" : "CEO - Al Noor Trading Company",
      content: currentLanguage === "ar" 
        ? "نظام ERP من x64-soft غيّر طريقة عملنا بالكامل. تمكنا من توحيد جميع العمليات وزيادة الكفاءة بنسبة 45%. الدعم الفني ممتاز والنظام سهل الاستخدام."
        : "The ERP system from x64-soft completely changed the way we work. We were able to unify all operations and increase efficiency by 45%. Technical support is excellent and the system is easy to use.",
      rating: 5,
      company: currentLanguage === "ar" ? "شركة النور للتجارة" : "Al Noor Trading",
      industry: currentLanguage === "ar" ? "التجارة" : "Trading",
      avatar: "AM"
    },
    {
      name: currentLanguage === "ar" ? "فاطمة أحمد" : "Fatima Ahmed", 
      role: currentLanguage === "ar" ? "مديرة العمليات - مجموعة الشرق" : "Operations Manager - Al Sharq Group",
      content: currentLanguage === "ar"
        ? "منذ تطبيق النظام، تحسنت إدارة المخزون بشكل كبير. التقارير التفصيلية تساعدنا في اتخاذ قرارات أكثر دقة. أنصح بشدة بهذا النظام."
        : "Since implementing the system, inventory management has improved significantly. Detailed reports help us make more accurate decisions. I highly recommend this system.",
      rating: 5,
      company: currentLanguage === "ar" ? "مجموعة الشرق" : "Al Sharq Group",
      industry: currentLanguage === "ar" ? "الصناعة" : "Manufacturing",
      avatar: "FA"
    },
    {
      name: currentLanguage === "ar" ? "محمد عبدالله" : "Mohammed Abdullah",
      role: currentLanguage === "ar" ? "المدير المالي - شركة المستقبل" : "CFO - Future Company",
      content: currentLanguage === "ar"
        ? "النظام المالي متكامل ودقيق. تمكنا من تتبع جميع المعاملات المالية بسهولة وإنتاج التقارير المطلوبة في دقائق معدودة."
        : "The financial system is integrated and accurate. We were able to track all financial transactions easily and produce required reports in minutes.",
      rating: 5,
      company: currentLanguage === "ar" ? "شركة المستقبل" : "Future Company",
      industry: currentLanguage === "ar" ? "الخدمات" : "Services",
      avatar: "MA"
    },
    {
      name: currentLanguage === "ar" ? "سارة خالد" : "Sarah Khalid",
      role: currentLanguage === "ar" ? "مديرة الموارد البشرية - تقنية الغد" : "HR Manager - Tomorrow Tech",
      content: currentLanguage === "ar"
        ? "إدارة الموظفين أصبحت أسهل بكثير. النظام يتعامل مع الرواتب والحضور والإجازات بكفاءة عالية. وفرنا الكثير من الوقت والجهد."
        : "Employee management has become much easier. The system handles payroll, attendance and leave with high efficiency. We saved a lot of time and effort.",
      rating: 5,
      company: currentLanguage === "ar" ? "تقنية الغد" : "Tomorrow Tech",
      industry: currentLanguage === "ar" ? "التقنية" : "Technology",
      avatar: "SK"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: currentLanguage === "ar" ? "عميل راضي" : "Happy Clients"
    },
    {
      number: "99.9%",
      label: currentLanguage === "ar" ? "معدل الرضا" : "Satisfaction Rate"
    },
    {
      number: "24/7",
      label: currentLanguage === "ar" ? "دعم فني" : "Support"
    },
    {
      number: "5+",
      label: currentLanguage === "ar" ? "سنوات خبرة" : "Years Experience"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            {currentLanguage === "ar" ? "آراء العملاء" : "Client Testimonials"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              {currentLanguage === "ar" ? "ماذا يقول عملاؤنا؟" : "What Our Clients Say?"}
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {currentLanguage === "ar" 
              ? "اكتشف تجارب عملائنا الناجحة مع نظام ERP وكيف ساهم في تطوير أعمالهم"
              : "Discover our clients' successful experiences with ERP system and how it contributed to developing their businesses"
            }
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card hover-lift group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <CardContent className="p-8 relative">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground/80 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                      <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {testimonial.role}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.company}
                        </Badge>
                        <span className="text-xs text-foreground/40">•</span>
                        <span className="text-xs text-foreground/60">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPTestimonials;
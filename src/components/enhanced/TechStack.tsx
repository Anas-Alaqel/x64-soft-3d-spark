
import { motion } from "framer-motion"
import { useLanguage } from "../LanguageProvider"
import { EnhancedCard } from "../ui/enhanced-card"

const TechStack = () => {
  const { currentLanguage } = useLanguage()

  const technologies = [
    {
      name: "React",
      icon: "⚛️",
      description: currentLanguage === "ar" ? "مكتبة لبناء واجهات المستخدم" : "Library for building user interfaces",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Node.js", 
      icon: "🟢",
      description: currentLanguage === "ar" ? "بيئة تشغيل JavaScript" : "JavaScript runtime environment",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "TypeScript",
      icon: "🔷", 
      description: currentLanguage === "ar" ? "JavaScript مع أنواع البيانات" : "JavaScript with type safety",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Python",
      icon: "🐍",
      description: currentLanguage === "ar" ? "لغة برمجة متعددة الاستخدامات" : "Versatile programming language", 
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: currentLanguage === "ar" ? "قاعدة بيانات NoSQL" : "NoSQL database",
      color: "from-green-600 to-teal-600"
    },
    {
      name: "AWS",
      icon: "☁️",
      description: currentLanguage === "ar" ? "خدمات الحوسبة السحابية" : "Cloud computing services",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {currentLanguage === "ar" ? "التقنيات التي نستخدمها" : "Technologies We Use"}
          </h2>
          <p className="text-lg text-foreground/70">
            {currentLanguage === "ar" 
              ? "نستخدم أحدث التقنيات لضمان أفضل النتائج"
              : "We use the latest technologies to ensure the best results"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <EnhancedCard variant="gradient" className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${tech.color} rounded-full mt-2`}></div>
                  </div>
                </div>
                <p className="text-foreground/80">{tech.description}</p>
                
                {/* Floating particles effect */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-accent/20 rounded-full blur-md animate-pulse delay-1000"></div>
              </EnhancedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 gradient-text">
            {currentLanguage === "ar" ? "التقنيات التي نستخدمها" : "Technologies We Use"}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {currentLanguage === "ar" 
              ? "نستخدم أحدث التقنيات لضمان أفضل النتائج"
              : "We use the latest technologies to ensure the best results"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              <EnhancedCard variant="gradient" className="p-4 sm:p-6 lg:p-8 h-full">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl mr-3 sm:mr-4">{tech.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{tech.name}</h3>
                    <div className={`h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r ${tech.color} rounded-full mt-2`}></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{tech.description}</p>
                
                {/* Floating particles effect */}
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 bg-accent/20 rounded-full blur-md animate-pulse delay-1000"></div>
              </EnhancedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

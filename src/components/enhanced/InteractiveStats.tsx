
import { motion } from "framer-motion"
import { useLanguage } from "../LanguageProvider"
import { EnhancedCard } from "../ui/enhanced-card"
import { ProgressBar } from "../ui/progress-bar"

const InteractiveStats = () => {
  const { currentLanguage } = useLanguage()

  const stats = [
    {
      title: currentLanguage === "ar" ? "مشاريع مكتملة" : "Completed Projects",
      value: 150,
      max: 200,
      icon: "🚀",
      color: "primary" as const
    },
    {
      title: currentLanguage === "ar" ? "عملاء راضون" : "Satisfied Clients", 
      value: 98,
      max: 100,
      icon: "😊",
      color: "accent" as const
    },
    {
      title: currentLanguage === "ar" ? "سنوات الخبرة" : "Years Experience",
      value: 8,
      max: 10, 
      icon: "⭐",
      color: "secondary" as const
    },
    {
      title: currentLanguage === "ar" ? "تقنيات متقدمة" : "Advanced Technologies",
      value: 25,
      max: 30,
      icon: "💻",
      color: "primary" as const
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 gradient-text">
            {currentLanguage === "ar" ? "إنجازاتنا بالأرقام" : "Our Achievements in Numbers"}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {currentLanguage === "ar" 
              ? "نفخر بما حققناه من نجاحات مع عملائنا"
              : "We're proud of our successes with our clients"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EnhancedCard 
                variant="glass" 
                className="p-4 sm:p-6 lg:p-8 text-center hover:scale-105 transition-transform h-full"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{stat.icon}</div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl">{stat.title}</h3>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 gradient-text">
                  {stat.value}
                  {stat.max === 100 ? "%" : ""}
                </div>
                <ProgressBar 
                  value={stat.value} 
                  max={stat.max}
                  color={stat.color}
                  showValue={false}
                  className="mt-3 sm:mt-4"
                />
              </EnhancedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveStats

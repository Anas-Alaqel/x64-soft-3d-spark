
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
    <section className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {currentLanguage === "ar" ? "إنجازاتنا بالأرقام" : "Our Achievements in Numbers"}
          </h2>
          <p className="text-lg text-foreground/70">
            {currentLanguage === "ar" 
              ? "نفخر بما حققناه من نجاحات مع عملائنا"
              : "We're proud of our successes with our clients"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="font-semibold mb-3 text-lg">{stat.title}</h3>
                <div className="text-3xl font-bold mb-4 gradient-text">
                  {stat.value}
                  {stat.max === 100 ? "%" : ""}
                </div>
                <ProgressBar 
                  value={stat.value} 
                  max={stat.max}
                  color={stat.color}
                  showValue={false}
                  className="mt-4"
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


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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 hero-magical relative overflow-hidden">
      {/* Background particles */}
      <div className="particles-container">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-magical neon-text"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 107, 107, 0.5)",
                "0 0 40px rgba(78, 205, 196, 0.5)",
                "0 0 20px rgba(255, 107, 107, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {currentLanguage === "ar" ? "إنجازاتنا بالأرقام" : "Our Achievements in Numbers"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto px-4"
          >
            {currentLanguage === "ar" 
              ? "نفخر بما حققناه من نجاحات مع عملائنا"
              : "We're proud of our successes with our clients"
            }
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="perspective-1000"
            >
              <div className="magical-card morph-card p-4 sm:p-6 lg:p-8 text-center h-full energy-orb floating-3d">
                {/* Icon with magical effect */}
                <motion.div 
                  className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 relative"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <span className="relative z-10">{stat.icon}</span>
                  <motion.div
                    className="absolute inset-0 magical-gradient rounded-full filter blur-lg opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-magical">
                  {stat.title}
                </h3>

                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-magical neon-text"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 + index * 0.2 }}
                  >
                    {stat.value}
                    {stat.max === 100 ? "%" : ""}
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                >
                  <ProgressBar 
                    value={stat.value} 
                    max={stat.max}
                    color={stat.color}
                    showValue={false}
                    className="mt-3 sm:mt-4 magical-gradient h-2 rounded-full overflow-hidden"
                  />
                </motion.div>

                {/* Floating orb */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 magical-gradient rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveStats

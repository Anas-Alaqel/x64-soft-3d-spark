
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const EnhancedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "gradient" | "floating"
    animated?: boolean
  }
>(({ className, variant = "default", animated = true, children, ...props }, ref) => {
  const variants = {
    default: "bg-card text-card-foreground shadow-lg border rounded-xl",
    glass: "glass-card backdrop-blur-xl bg-background/20 border-primary/10",
    gradient: "bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20 shadow-xl",
    floating: "bg-card shadow-2xl border-0 transform-gpu"
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const CardComponent = animated ? motion.div : "div"

  return (
    <CardComponent
      ref={ref}
      className={cn(
        variants[variant],
        "relative overflow-hidden transition-all duration-300",
        variant === "floating" && "hover:shadow-glow-lg",
        className
      )}
      {...(animated && {
        initial: "hidden",
        whileInView: "visible",
        whileHover: "hover",
        viewport: { once: true, margin: "-50px" },
        variants: cardVariants
      })}
      {...props}
    >
      {/* Background pattern for glass variant */}
      {variant === "glass" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      )}
      
      {/* Shimmer effect */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </CardComponent>
  )
})
EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard }

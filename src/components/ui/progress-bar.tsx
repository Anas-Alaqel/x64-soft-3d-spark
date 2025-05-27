
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showValue?: boolean
  animated?: boolean
  color?: "primary" | "secondary" | "accent"
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, max = 100, className, showValue = false, animated = true, color = "primary", ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    const colorVariants = {
      primary: "bg-primary",
      secondary: "bg-secondary", 
      accent: "bg-accent"
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex justify-between items-center mb-2">
          {showValue && (
            <span className="text-sm font-medium text-foreground">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
        
        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
          <motion.div
            className={cn(
              "h-full rounded-full",
              colorVariants[color],
              "relative overflow-hidden"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ 
              duration: animated ? 1.5 : 0,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
          </motion.div>
        </div>
      </div>
    )
  }
)
ProgressBar.displayName = "ProgressBar"

export { ProgressBar }

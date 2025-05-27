
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "./button"

interface FloatingButtonProps extends ButtonProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  icon?: React.ReactNode
  tooltip?: string
}

const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ className, position = "bottom-right", icon, tooltip, children, ...props }, ref) => {
    const positions = {
      "bottom-right": "fixed bottom-6 right-6",
      "bottom-left": "fixed bottom-6 left-6", 
      "top-right": "fixed top-20 right-6",
      "top-left": "fixed top-20 left-6"
    }

    return (
      <motion.div
        className={positions[position]}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          ref={ref}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg hover:shadow-xl glow",
            "bg-primary hover:bg-primary/90 text-primary-foreground",
            className
          )}
          title={tooltip}
          {...props}
        >
          {icon || children}
        </Button>
      </motion.div>
    )
  }
)
FloatingButton.displayName = "FloatingButton"

export { FloatingButton }

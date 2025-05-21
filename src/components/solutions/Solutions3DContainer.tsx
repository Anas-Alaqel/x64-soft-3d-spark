
import { useRef } from "react";
import { motion } from "framer-motion";
import X64Animation from "./X64Animation";

const Solutions3DContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="h-[300px] sm:h-[400px] md:h-[450px] relative order-1 lg:order-2"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      <div ref={containerRef} className="absolute inset-0 z-10">
        <X64Animation containerRef={containerRef} />
      </div>
    </motion.div>
  );
};

export default Solutions3DContainer;

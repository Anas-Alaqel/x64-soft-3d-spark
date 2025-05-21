
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SolutionsListProps {
  solutions: string[];
}

const SolutionsList = ({ solutions }: SolutionsListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="order-2 lg:order-1"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Our <span className="gradient-text">Solutions</span>
      </h2>
      <p className="text-base sm:text-lg text-foreground/80 mb-6 md:mb-8">
        x64-soft delivers integrated solutions that address complex business challenges across industries. Our team works closely with clients to understand their unique needs and develop customized technology solutions.
      </p>
      
      <ul className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
        {solutions.map((solution, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center diamond-bullet"
          >
            <span>{solution}</span>
          </motion.li>
        ))}
      </ul>
      
      <Button className="bg-primary hover:bg-primary/90 glow">
        Explore All Solutions
      </Button>
    </motion.div>
  );
};

export default SolutionsList;

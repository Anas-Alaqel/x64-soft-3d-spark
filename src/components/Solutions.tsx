
import { useEffect } from "react";
import SolutionsList from "./solutions/SolutionsList";
import Solutions3DContainer from "./solutions/Solutions3DContainer";

const Solutions = () => {
  const solutions = [
    "Enterprise Resource Planning",
    "Customer Relationship Management",
    "Business Intelligence Tools",
    "Supply Chain Management",
    "Healthcare Management Systems",
    "E-commerce Solutions",
    "Fintech Applications"
  ];

  // Add visibility detection for better performance
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const solutionsSection = document.getElementById('solutions');
        if (solutionsSection) {
          if (entry.isIntersecting) {
            // Section is visible, enable 3D animations
            solutionsSection.classList.remove('paused-animations');
          } else {
            // Section is not visible, pause 3D animations for performance
            solutionsSection.classList.add('paused-animations');
          }
        }
      });
    }, {
      threshold: 0.1
    });

    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      observer.observe(solutionsSection);
    }

    return () => {
      if (solutionsSection) {
        observer.unobserve(solutionsSection);
      }
    };
  }, []);

  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-40 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SolutionsList solutions={solutions} />
          <Solutions3DContainer />
        </div>
      </div>
    </section>
  );
};

export default Solutions;

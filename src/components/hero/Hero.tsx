
import HeroAnimation from "./HeroAnimation";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        <HeroAnimation />
      </div>
      
      <div className="container mx-auto relative z-20 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;

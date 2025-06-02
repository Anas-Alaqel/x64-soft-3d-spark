
import MagicalHero from "./MagicalHero";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <>
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <HeroAnimation />
      </div>
      
      {/* Magical Hero Content */}
      <MagicalHero />
    </>
  );
};

export default Hero;

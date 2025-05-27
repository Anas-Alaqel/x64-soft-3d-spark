
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import InteractiveStats from "@/components/enhanced/InteractiveStats";
import TechStack from "@/components/enhanced/TechStack";
import CallToAction from "@/components/enhanced/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingButton } from "@/components/ui/floating-button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const handleChatClick = () => {
    // يمكن إضافة وظيفة فتح chat أو WhatsApp هنا
    console.log("Opening chat...");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <InteractiveStats />
      <Services />
      <Solutions />
      <TechStack />
      <CallToAction />
      <Contact />
      <Footer />
      
      {/* Floating Chat Button */}
      <FloatingButton
        position="bottom-right"
        icon={<MessageCircle className="w-6 h-6" />}
        tooltip="تواصل معنا"
        onClick={handleChatClick}
      />
    </div>
  );
};

export default Index;


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
    const phoneNumber = "967774336315";
    const message = "مرحباً، أود الاستفسار عن خدماتكم";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
      
      {/* Floating WhatsApp Button */}
      <FloatingButton
        position="bottom-right"
        icon={<MessageCircle className="w-6 h-6" />}
        tooltip="تواصل معنا عبر الواتساب"
        onClick={handleChatClick}
        className="bg-green-600 hover:bg-green-700"
      />
    </div>
  );
};

export default Index;

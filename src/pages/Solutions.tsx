
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <Solutions />
      </div>
      <Footer />
    </div>
  );
};

export default SolutionsPage;

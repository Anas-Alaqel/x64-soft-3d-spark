
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 flex items-center justify-center min-h-[70vh]">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

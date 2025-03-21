
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Demo = () => {
  const navigate = useNavigate();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a Demo
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how Just can help your company reduce FX costs and gain complete transparency into your transactions.
            </p>
            <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 mb-6">
                Our demo page is coming soon. Please check back later or contact us directly.
              </p>
              <Button 
                onClick={() => navigate("/faq")}
                className="bg-just-orange hover:bg-just-darkOrange text-white"
              >
                Back to FAQ
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;

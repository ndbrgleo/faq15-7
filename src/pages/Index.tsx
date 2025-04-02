
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-4xl text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-[500] text-[#1f272a] mb-6" style={{ fontFamily: 'Relative Medium' }}>
          Welcome to <span className="text-just-orange">Just</span>
        </h1>
        <p className="text-xl text-[#6A6F71] mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Relative Book' }}>
          Reduce FX costs by up to 65% and take control of your FX strategy with our intuitive analytics platform.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Button 
            asChild
            className="bg-just-orange hover:bg-just-darkOrange text-white p-6 rounded-md transition-all text-lg"
          >
            <Link to="/faq">
              View our FAQ
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-just-orange text-just-orange hover:bg-just-orange/10 p-6 rounded-md transition-all text-lg"
          >
            Book a demo
          </Button>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What our platform offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <FeatureCard 
              title="FX Analytics" 
              description="Gain complete visibility into your FX trades and costs."
            />
            <FeatureCard 
              title="Benchmarking" 
              description="Compare your rates with what similar companies are paying."
            />
            <FeatureCard 
              title="Cost Reduction" 
              description="Negotiate better rates with data-backed insights."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
    <h3 className="text-xl font-[500] text-[#1f272a] mb-2" style={{ fontFamily: 'Relative Medium' }}>
      {title}
    </h3>
    <p className="text-[#6A6F71]" style={{ fontFamily: 'Relative Book' }}>{description}</p>
  </div>
);

export default Index;


import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-2xl mx-auto text-center py-0 min-h-[100px] flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Knowledge Hub
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Your comprehensive guide to mastering the foreign exchange market
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          className="bg-just-orange hover:bg-just-darkOrange text-white py-2 px-6 rounded-md transition-all"
          onClick={() => navigate("/demo")}
        >
          Book a demo
        </Button>
        <Button 
          variant="outline" 
          className="border-just-orange text-just-orange hover:bg-just-orange/10 py-2 px-6 rounded-md transition-all"
          onClick={() => navigate("/contact")}
        >
          Contact support
        </Button>
      </div>
    </div>
  );
};

export default FAQHeader;

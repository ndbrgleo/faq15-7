
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-just-orange to-orange-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to take control of your FX costs?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Join over 100 leading companies who trust Just to help them reduce FX costs by up to 65% and gain complete transparency into their FX operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-just-orange hover:bg-gray-100 py-6 px-8 rounded-md transition-all text-base font-medium">
                Book a demo
              </Button>
              <Button variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-just-orange py-6 px-8 rounded-md transition-all text-base font-medium">
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-1 w-full max-w-md">
              <div className="text-sm text-gray-500 mb-2">Typical results with Just</div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-just-orange">65%</span>
                <span className="ml-2 text-gray-700">reduction in FX costs</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full mb-6">
                <div className="h-2 bg-just-orange rounded-full w-3/4"></div>
              </div>
              <div className="space-y-4">
                <Testimonial 
                  quote="Just has completely transformed how we manage our FX operations."
                  company="Major European Manufacturer"
                />
                <Testimonial 
                  quote="We've saved over $300,000 in our first year using the platform."
                  company="Global Technology Company"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 right-1/4 w-48 h-48 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

const Testimonial = ({ quote, company }: { quote: string; company: string }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <p className="text-gray-800 italic mb-2">"{quote}"</p>
    <p className="text-sm text-gray-500">— {company}</p>
  </div>
);

export default CTASection;

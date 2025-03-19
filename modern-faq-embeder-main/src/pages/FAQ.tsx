import FAQHeader from "@/components/FAQHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQHeader />
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion />
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to help you find the answers you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-gray-600 mb-4">Get help from our expert support team.</p>
                <a 
                  href="mailto:support@just.com" 
                  className="text-just-orange hover:text-just-darkOrange font-medium flex items-center justify-center"
                >
                  support@just.com
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule a Demo</h3>
                <p className="text-gray-600 mb-4">See our platform in action with a personalized demo.</p>
                <button className="text-just-orange hover:text-just-darkOrange font-medium">
                  Book your demo now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
import FAQHeader from "@/components/FAQHeader";
import FAQAccordion from "@/components/FAQAccordion";
// import CTASection from "@/components/CTASection";
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
        <section className="py-4 md:py-8 bg-white border-b border-gray-100">
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
        <section className="relative py-16 bg-gradient-to-r from-just-orange to-orange-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team is ready to help you find the answers you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-md transition-all transform -rotate-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-gray-700 mb-4">Get help from our expert support team.</p>
                <a
                    href="mailto:support@gojust.com"
                    className="text-just-orange hover:text-just-darkOrange font-medium underline"
                >
                  support@gojust.com
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:shadow-md transition-all transform rotate-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule a meeting</h3>
                <p className="text-gray-700 mb-4">
                  Meet with our Customer Success team to get personalized guidance.
                </p>
                <a
                    href="https://www.gojust.com/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-just-orange hover:text-just-darkOrange font-medium underline"
                >
                  Book your meeting now
                </a>
              </div>
            </div>

          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 -left-24 w-80 h-80 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-24 right-1/4 w-48 h-48 bg-white/10 rounded-full"></div>
          </div>
        </section>


        {/* CTA Section */}
        {/*<CTASection />*/}
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
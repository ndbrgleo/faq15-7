import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faq-data";

const FAQAccordion = () => {
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState("");

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  useEffect(() => {
    if (activeCategory) {
      setFilteredFAQs(faqItems.filter(item => item.category === activeCategory));
    } else {
      setFilteredFAQs([]);
    }
  }, [activeCategory]);

  return (
    <div className="w-full max-w-7xl mx-auto flex gap-8">
      {/* Categories Panel */}
      <div className="w-64 shrink-0">
        <div className="sticky top-4 space-y-2">
          {categories.map((category) => (
            <p
              key={category}
              className={`cursor-pointer text-lg font-medium text-gray-700 hover:text-just-orange transition-all ${
                activeCategory === category ? "text-just-orange" : ""
              }`}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Select a category to view FAQs.</h3>
          </div>
        ) : (
          <div className="space-y-4">
            <Accordion type="single" collapsible value={activeFAQ} onValueChange={setActiveFAQ}>
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  id={faq.id}
                  className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white px-0 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900 group-hover:text-just-orange transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6 transition-all duration-2000 ease-in-out">
                    <div className="prose prose-sm max-w-none faq-content">
                      {typeof faq.answer === 'string' ? (
                        <ReactMarkdown>{faq.answer}</ReactMarkdown>
                      ) : (
                        faq.answer
                      )}
                      {faq.videoEmbed && (
                        <div className="mt-4">
                          <iframe
                            width="50%"
                            height="50%"
                            src={faq.videoEmbed}
                            title={`Video for ${faq.question}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;

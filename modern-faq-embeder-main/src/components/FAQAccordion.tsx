
import { Circle } from "lucide-react"; // Import a dot icon
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faq-data";

const FAQAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqItems);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFAQ, setActiveFAQ] = useState("");

  const categories = ["all", ...Array.from(new Set(faqItems.map(item => item.category)))];

  useEffect(() => {
    let filtered = faqItems;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input 
          type="text" 
          placeholder="Search FAQs..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-6 text-base transition-all duration-200 focus:ring-2 focus:ring-just-orange focus:border-just-orange"
        />
      </div>

      <div className="flex gap-8">
        {/* Categories Panel */}
        <div className="w-64 shrink-0">
          <div className="sticky top-4 space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`w-full ${
                  activeCategory === category 
                    ? "bg-just-orange hover:bg-just-darkOrange text-white" 
                    : "hover:text-just-orange"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Side Index */}
        <div className="w-64 shrink-0">
          <div className="sticky top-4">
            <div className="space-y-5">
              {filteredFAQs.map((faq) => (
                <Button
                  key={faq.id}
                  variant="ghost"
                      className={`w-full justify-start text-sm text-left break-words whitespace-normal ${
                        activeFAQ === faq.id 
                          ? "text-just-orange bg-just-orange/10" 
                          : "text-gray-600 hover:text-just-orange hover:bg-just-orange/5"
                  }`}
                  onClick={() => {
                    setActiveFAQ(faq.id); // Expand the correct FAQ first

                    setTimeout(() => {
                      const element = document.getElementById(faq.id);
                      if (element) {
                        const yOffset = -200; // Adjust this value based on your header height
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 400); // Small delay to allow accordion to expand first
                  }}
                >
                  <Circle className="w-2 h-2 text-gray-800 mr-2" /> {/* Small dark dot icon */}
                  {faq.question}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
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
    </div>
  );
};

export default FAQAccordion;

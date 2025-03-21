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
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  useEffect(() => {
    if (activeCategory) {
      setFilteredFAQs(faqItems.filter(item => item.category === activeCategory));
      setActiveFAQ(null);
      setCurrentPage(1);
    } else {
      setFilteredFAQs([]);
      setActiveFAQ(null);
    }
  }, [activeCategory]);

  const handleCardClick = (faqId) => {
    setActiveFAQ(faqId);
  };

  const totalPages = Math.ceil(filteredFAQs.length / ITEMS_PER_PAGE);
  const paginatedFAQs = activeCategory === "Guides (Playbooks)"
    ? filteredFAQs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : filteredFAQs;
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Always switch categories without toggling
  };


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
                onClick={() => handleCategoryClick(category)}
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
            <h3 className="text-lg font-medium text-gray-900">Select a category to start learning.</h3>
          </div>
        ) : (
          <>
            {activeCategory === "Guides (Playbooks)" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paginatedFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className={`border border-gray-200 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md ${activeFAQ === faq.id ? "col-span-full" : ""}`}
                      onClick={() => handleCardClick(activeFAQ === faq.id ? null : faq.id)}
                    >
                      <h3 className="font-medium text-gray-900 text-lg mb-2">{faq.question}</h3>
                      {activeFAQ === faq.id && (
                        <div className="prose prose-sm max-w-none faq-content">
                          {typeof faq.answer === 'string' ? (
                            <ReactMarkdown>{faq.answer}</ReactMarkdown>
                          ) : (
                            faq.answer
                          )}
                          {faq.videoEmbed && (
                            <div className="mt-4">
                              <iframe
                                width="100%"
                                height="100%"
                                src={faq.videoEmbed}
                                title={`Video for ${faq.question}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : activeCategory === "Video Tutorials" ? (
              <div className="space-y-4">
                <Accordion
                  type="multiple"
                  value={activeCategory === "Video Tutorials" ? filteredFAQs.map(faq => faq.id) : []} // Expands all when category is selected
                  onValueChange={setActiveFAQ} // Allows manual collapsing
                >
                  {filteredFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      id={faq.id}
                      className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                        <div className="text-left">
                          <h3 className="font-medium text-gray-900 group-hover:text-just-orange transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pt-2 pb-6">
                        <div className="prose prose-sm max-w-none faq-content">
                          {typeof faq.answer === 'string' ? (
                            <ReactMarkdown>{faq.answer}</ReactMarkdown>
                          ) : (
                            faq.answer
                          )}
                          {faq.videoEmbed && (
                            <div className="mt-4">
                              <iframe
                                width="100%"
                                height="100%"
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
            ) : (
              <div className="space-y-4">
                <Accordion
                  type="single"
                  collapsible
                  value={activeFAQ}
                  onValueChange={setActiveFAQ}
                >
                  {filteredFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      id={faq.id}
                      className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                        <div className="text-left">
                          <h3 className="font-medium text-gray-900 group-hover:text-just-orange transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pt-2 pb-6">
                        <div className="prose prose-sm max-w-none faq-content">
                          {typeof faq.answer === 'string' ? (
                            <ReactMarkdown>{faq.answer}</ReactMarkdown>
                          ) : (
                            faq.answer
                          )}
                          {faq.videoEmbed && (
                            <div className="mt-4">
                              <iframe
                                width="100%"
                                height="100%"
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
          </>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;

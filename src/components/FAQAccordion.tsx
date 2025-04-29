import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQs } from "@/lib/getFAQs";

interface FAQItem {
  _id: string;
  category: string;
  question: string;
  answer: any[];
  videoEmbed?: string;
}

const FAQAccordion = () => {
  const [allFAQs, setAllFAQs] = useState<FAQItem[]>([]);
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>("FAQ");
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    getFAQs().then((data) => {
      setAllFAQs(data);
      if (data.length > 0) {
        const defaultFiltered = data.filter(item => item.category === "FAQ");
        setFilteredFAQs(defaultFiltered);
      }
    });
  }, []);

  useEffect(() => {
    if (activeCategory) {
      const newFilteredFAQs = allFAQs.filter(item => item.category === activeCategory);
      setFilteredFAQs(newFilteredFAQs);
      setCurrentPage(1);

      if (activeCategory === "Video Tutorials") {
        setExpandedFAQs(newFilteredFAQs.map(faq => faq._id));
      } else {
        setExpandedFAQs([]);
      }
    }
  }, [activeCategory, allFAQs]);

  const categories = allFAQs.length
      ? Array.from(new Set(allFAQs.map((item) => item.category)))
      : [];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleToggle = (faqId: string) => {
    if (expandedFAQs.includes(faqId)) {
      setExpandedFAQs([]); // collapse all
    } else {
      setExpandedFAQs([faqId]); // expand only clicked one
    }
  };

  const totalPages = Math.ceil(filteredFAQs.length / ITEMS_PER_PAGE);
  const paginatedFAQs = activeCategory === "Guides (Playbooks)"
      ? filteredFAQs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
      : filteredFAQs;

  const renderAnswer = (answer: any[]) => {
    const markdown = answer
        .filter((block) => block._type === 'block')
        .map((block) => block.children.map((child: any) => child.text).join(''))
        .join('\n\n');

    return <ReactMarkdown>{markdown}</ReactMarkdown>;
  };

  return (
      <div className="w-full max-w-7xl mx-auto flex gap-8">
        <div className="w-64 shrink-0">
          <div className="sticky top-4 space-y-2">
            {categories.map((category) => (
                <p
                    key={category}
                    className={`cursor-pointer text-lg font-medium text-gray-700 hover:text-just-orange transition-all ${
                        activeCategory === category ? "text-just-orange" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
            ))}
          </div>
        </div>

        <div className="flex-grow">
          {filteredFAQs.length === 0 ? null : (
              <>
                {activeCategory === "Guides (Playbooks)" ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paginatedFAQs.map((faq) => (
                            <div
                                key={faq._id}
                                className={`border border-gray-200 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md ${expandedFAQs.includes(faq._id) ? "col-span-full" : ""}`}
                                onClick={() => handleToggle(faq._id)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={() => handleToggle(faq._id)}
                            >
                              <h3 className="font-medium text-gray-900 text-lg mb-2">{faq.question}</h3>
                              {expandedFAQs.includes(faq._id) && (
                                  <div className="prose prose-sm max-w-none faq-content">
                                    {renderAnswer(faq.answer)}
                                    {faq.videoEmbed && (
                                        <div className="mt-4">
                                          <iframe
                                              width="100%"
                                              height="100%"
                                              className="aspect-video"
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
                ) : (
                    <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                      <Accordion
                          type="single"
                          collapsible
                          value={expandedFAQs[0] || ''}
                          onValueChange={(value) => setExpandedFAQs(value ? [value] : [])}
                      >
                        {filteredFAQs.map((faq) => (
                            <AccordionItem key={faq._id} value={faq._id}>
                              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                                <h3 className="font-medium text-gray-900 group-hover:text-just-orange transition-colors">
                                  {faq.question}
                                </h3>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pt-2 pb-6">
                                <div className="prose prose-sm max-w-none faq-content">
                                  {renderAnswer(faq.answer)}
                                  {faq.videoEmbed && (
                                      <div className="mt-4">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            className="aspect-video"
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

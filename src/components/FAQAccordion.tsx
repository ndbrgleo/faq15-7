import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQs } from "@/lib/getFAQs";
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

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

  const allowedCategories = [
    "FAQ",
    "Video Tutorials",
    "FX Market Mechanics",
    "FX Instruments",
    "Guides",
  ];

  const categories = allowedCategories.filter(cat =>
      allFAQs.some(faq => faq.category === cat)
  );


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
  const paginatedFAQs = activeCategory === "Guides"
      ? filteredFAQs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
      : filteredFAQs;

  const renderAnswer = (answer: any[]) => {
    const components = {
      block: {
        normal: ({ children }) => (
            <p className="text-[1rem] mb-4 leading-relaxed">{children}</p>
        ),
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-6 mb-3">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-5 mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-medium mt-3 mb-1">{children}</h4>
        ),
        h5: ({ children }) => (
            <h5 className="text-base font-medium mt-2 mb-1">{children}</h5>
        ),
        h6: ({ children }) => (
            <h6 className="text-sm font-medium mt-2 mb-1">{children}</h6>
        ),
      },

      list: {
        bullet: ({ children }: { children: any }) => (
            <ul className="list-disc ml-6 mb-2">{children}</ul>
        ),
        number: ({ children }: { children: any }) => (
            <ol className="list-decimal ml-6 mb-2">{children}</ol>
        ),
      },
      listItem: {
        bullet: ({ children }: { children: any }) => (
            <li className="text-[1rem] mb-1 leading-relaxed">{children}</li>
        ),
        number: ({ children }: { children: any }) => (
            <li className="text-[1rem] mb-1 leading-relaxed">{children}</li>
        ),
      },

      marks: {
        link: ({ value, children }: { value: any; children: any }) => (
            <a
                href={value.href}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              {children}
            </a>
        ),
        strong: ({ children }: { children: any }) => (
            <strong className="font-medium">{children}</strong>
        ),
        em: ({ children }: { children: any }) => (
            <em className="italic">{children}</em>
        ),
        blue: ({ children }: { children: any }) => (
            <span className="text-blue-500">{children}</span>
        ),
        orange: ({ children }: { children: any }) => (
            <span className="text-orange-500">{children}</span>
        ),
      },
    } as PortableTextReactComponents;

    return <PortableText value={answer} components={components} />;
  };



  return (
      <div className="w-full max-w-7xl mx-auto flex gap-8">
        <div className="w-64 shrink-0">
          <div className="sticky top-4 space-y-2">
            {categories.map((category) => (
                <p
                    key={category}
                    className={`cursor-pointer text-[1.2rem] font-medium text-gray-700 hover:text-just-orange transition-all ${
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
                {activeCategory === "Guides" ? (
                    <>
                      <div className="flex flex-col gap-6">
                      {paginatedFAQs.map((faq) => (
                          <div
                              key={faq._id}
                              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                          >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>

                            {/* Optional: short preview of the answer */}
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {faq.answer?.[0]?.children?.[0]?.text || 'Read more...'}
                            </p>

                            <button
                                onClick={() => handleToggle(faq._id)}
                                className="text-just-orange font-medium hover:underline"
                            >
                              {expandedFAQs.includes(faq._id) ? "Hide" : "Read more"}
                            </button>

                            {expandedFAQs.includes(faq._id) && (
                                <div className="mt-4 prose max-w-none faq-content">
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
                                <h3 className="font-medium text-gray-900 text-[1.1rem] group-hover:text-just-orange transition-colors">
                                  {faq.question}
                                </h3> {/* this is the quesions */}
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pt-2 pb-6">
                                <div className="prose max-w-none faq-content">
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
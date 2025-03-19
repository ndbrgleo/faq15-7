import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqItems } from "@/lib/faq-data";

const FAQAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqItems);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const categories = ["all", ...Array.from(new Set(faqItems.map((item) => item.category)))];

  useEffect(() => {
    let filtered = faqItems;

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (typeof item.answer === "string" &&
            item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

  // Handle selecting a question
  const handleCardClick = (faq) => {
    setSelectedFAQ(faq); // Show clicked FAQ in full view
  };

  // Handle returning to FAQ list
  const handleBackToFAQs = () => {
    setSelectedFAQ(null); // Reset selection
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 🔍 Search Bar */}
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
        {/* 📌 Categories Sidebar */}
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
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedFAQ(null); // Reset selected FAQ when changing categories
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* 🔹 Main Content Area */}
        <div className="flex-grow">
          {/* If an FAQ is selected, show full view */}
          {selectedFAQ ? (
            <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
              <h2 className="text-2xl font-bold text-gray-900">{selectedFAQ.question}</h2>
              <div className="prose prose-lg text-gray-700 mt-4">
                {typeof selectedFAQ.answer === "string" ? (
                  <ReactMarkdown>{selectedFAQ.answer}</ReactMarkdown>
                ) : (
                  selectedFAQ.answer
                )}
              </div>
              {selectedFAQ.videoEmbed && (
                <div className="mt-6">
                  <iframe
                    width="100%"
                    height="400"
                    src={selectedFAQ.videoEmbed}
                    title={`Video for ${selectedFAQ.question}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <Button className="mt-6 bg-just-orange text-white px-6 py-2 rounded-md" onClick={handleBackToFAQs}>
                Back to FAQs
              </Button>
            </div>
          ) : (
            // Otherwise, show list of FAQ cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">No results found</h3>
                  <p className="mt-2 text-gray-600">Try adjusting your search or filter.</p>
                </div>
              ) : (
                filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-all"
                    onClick={() => handleCardClick(faq)}
                  >
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;

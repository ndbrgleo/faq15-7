import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQHeader = () => {
    return (
        <div className="max-w-2xl mx-auto text-center flex flex-col justify-center space-y-4 py-4">
            <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-0">
                Knowledge Hub
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-1">
                Your comprehensive guide to mastering the foreign exchange market
            </p>
            {/*<div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://www.gojust.com/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-just-orange hover:bg-just-darkOrange text-white py-2 px-6 rounded-md transition-all">
                        Book a demo
                    </Button>
                </a>
                <a href="mailto:support@gojust.com">
                    <Button
                        variant="outline"
                        className="border-just-orange text-just-orange hover:bg-just-orange/10 py-2 px-6 rounded-md transition-all"
                    >
                        Contact support
                    </Button>
                </a>
            </div>*/}
        </div>
    );
};

export default FAQHeader;

import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "@/components/ui/fonts.css"; // Ensure this is where you place the @font-face definitions

const JustNavigationHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = window.location.href;

  const links = [
    { label: "FX Analytics", path: "https://app.gojust.com/home" },
    { label: "Interest Rate Analytics", path: "https://app.gojust.com/interest-rate-analytics" },
    { label: "Commodities Analytics", path: "https://app.gojust.com/commodities-analytics" },
    { label: "Liquidity Connect", path: "https://app.gojust.com/liquidity-connect", badge: "NEW" },
    { label: "Knowledge Hub", path: window.location.origin, badge: "NEW" },
  ];

  return (
    <header className="w-full bg-[#F6FDFF] border-b border-gray-200 sticky top-0 z-50 font-sans">
      <div className="w-full px-8 py-3 flex items-center justify-between h-[60px] text-[16px] text-[#6A6F71] font-normal leading-[20px]">
        <div className="flex items-center gap-[40px] pl-[32px]">
          <img src="/Just.png" alt="Just Logo" className="h-[26px] w-auto mr-[16px]" />
          {links.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className={`hover:text-[#6A6F71]/90 transition-colors ${
                currentPath.startsWith(link.path) ? "text-[#1f272a] font-[500]" : "text-[#6A6F71] font-[400]"
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="ml-1 text-xs bg-[#f59e0b] text-white px-1.5 py-0.5 rounded-full align-top">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <Button 
            className="bg-just-orange hover:bg-just-darkOrange text-white py-2 px-6 rounded-md transition-all text-[16px] font-normal"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default JustNavigationHeader;

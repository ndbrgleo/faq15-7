
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HelpCircle, LogOut, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "FX Analytics", path: "https://app.gojust.com/fx" },
    { label: "Interest Rate Analytics", path: "https://app.gojust.com/ira" },
    { label: "Commodities Analytics", path: "https://app.gojust.com/commodities" },
    { label: "Liquidity Connect", path: "https://app.gojust.com/liquidity", badge: "NEW" },
    { label: "Knowledge Hub", path: window.location.origin },
  ];

  return (
    <header className="w-full bg-[#030607] border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-11 py-3 flex items-center justify-between h-[6rem] text-sm font-medium text-gray-700">
        <div className="flex items-center space-x-6">
          <img src="/Just.png" alt="Just Logo" className="h-5 w-auto" />
          {links.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className={`text-white hover:text-white/90 transition-all ${
                location.pathname === link.path ? "text-white" : ""
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="ml-1 text-xs bg-[#ff9c00] text-white px-1.5 py-0.5 rounded-full align-top">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white/90"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-8 h-8 bg-[#ff9c00] text-white flex items-center justify-center rounded-full hover:bg-[#e68a00] transition-colors cursor-pointer">
              L
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[240px]">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
                <DropdownMenuShortcut>Personal details, password, security</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>FAQ</span>
                <DropdownMenuShortcut>Common questions about the FX market</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

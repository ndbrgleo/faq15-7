
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <LogoIcon className="h-8 w-auto text-just-orange" />
              <span className="ml-2 text-2xl font-bold">Just</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavDropdown title="Product">
              <NavItem href="#" label="FX Analytics" />
              <NavItem href="#" label="Interest Rate Analytics" />
              <NavItem href="#" label="Commodities Analytics" />
              <NavItem href="#" label="Liquidity Connect" badge="NEW" />
            </NavDropdown>
            <NavDropdown title="Customers">
              <NavItem href="#" label="Success Stories" />
              <NavItem href="#" label="Use Cases" />
            </NavDropdown>
            <NavDropdown title="Partners">
              <NavItem href="#" label="Banks" />
              <NavItem href="#" label="Platforms" />
              <NavItem href="#" label="Become a Partner" />
            </NavDropdown>
            <NavDropdown title="Case Studies">
              <NavItem href="#" label="Comapny AS" />
              <NavItem href="#" label="RW Co AS" />
              <NavItem href="#" label="Swedish Transport AB" />
            </NavDropdown>
            <NavDropdown title="Resources">
              <NavItem href="/faq" label="FAQ" isActive />
              <NavItem href="#" label="Blog" />
              <NavItem href="#" label="Documentation" />
            </NavDropdown>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">Login</Button>
            <Button className="bg-just-orange hover:bg-just-darkOrange text-white">
              Book a demo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem label="Product" />
            <MobileNavItem label="Customers" />
            <MobileNavItem label="Partners" />
            <MobileNavItem label="Case Studies" href="/case-studies" />
            <MobileNavItem label="Resources" isActive />
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start">Login</Button>
              <Button className="w-full bg-just-orange hover:bg-just-darkOrange text-white">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const LogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M3 3h8v8H3V3z" />
  </svg>
);

interface NavItemProps {
  href?: string;
  label: string;
  isActive?: boolean;
  badge?: string;
}

const NavItem = ({ href = "#", label, isActive, badge }: NavItemProps) => (
  <a 
    href={href} 
    className={cn(
      "text-sm font-medium transition-colors hover:text-just-orange py-2 block",
      isActive ? "text-just-orange" : "text-gray-700"
    )}
  >
    <div className="flex items-center">
      {label}
      {badge && (
        <span className="ml-2 bg-just-orange text-white text-xs px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  </a>
);

const MobileNavItem = ({ href = "#", label, isActive }: NavItemProps) => (
  <a 
    href={href} 
    className={cn(
      "block px-3 py-2 rounded-md text-base font-medium border-l-2",
      isActive 
        ? "text-just-orange border-just-orange bg-orange-50" 
        : "text-gray-700 border-transparent hover:text-just-orange hover:bg-orange-50 hover:border-just-orange"
    )}
  >
    {label}
  </a>
);

const NavDropdown = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-medium text-gray-700 hover:text-just-orange focus:outline-none"
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 animate-fade-in"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

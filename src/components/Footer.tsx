
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="h-8 w-auto text-just-orange"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M3 3h8v8H3V3z" />
              </svg>
              <span className="ml-2 text-2xl font-bold">Just</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Helping companies reduce FX costs and take control of their FX strategy.
            </p>
            <div className="mt-4 flex space-x-3">
              <SocialIcon href="#" icon="linkedin" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="facebook" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="#">FX Analytics</FooterLink>
              <FooterLink href="#">Interest Rate Analytics</FooterLink>
              <FooterLink href="#">Commodities Analytics</FooterLink>
              <FooterLink href="#">Liquidity Connect</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="/faq" isActive>FAQ</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Just Technologies. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="mr-4">Login</Button>
            <Button className="bg-just-orange hover:bg-just-darkOrange text-white">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => (
  <a 
    href={href} 
    className="text-gray-500 hover:text-just-orange transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">{icon}</span>
    <div className="h-6 w-6 border border-gray-300 rounded-full flex items-center justify-center hover:border-just-orange transition-colors">
      <span className="text-xs uppercase">{icon.charAt(0)}</span>
    </div>
  </a>
);

const FooterLink = ({ 
  href, 
  children,
  isActive = false 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive?: boolean;
}) => (
  <li>
    <a 
      href={href} 
      className={`text-sm hover:text-just-orange transition-colors ${isActive ? 'text-just-orange font-medium' : 'text-gray-600'}`}
    >
      {children}
    </a>
  </li>
);

export default Footer;

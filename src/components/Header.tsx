import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-serif font-bold text-navy">
            Phare<span className="text-gold">X</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="text-sm font-medium text-navy hover:text-gold transition-colors"
            activeClassName="text-gold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium text-navy hover:text-gold transition-colors"
            activeClassName="text-gold"
          >
            About Us
          </NavLink>
          <button className="text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-1">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-1">
            Community <ChevronDown className="w-4 h-4" />
          </button>
          <NavLink
            to="/orientation-services"
            className="text-sm font-medium text-navy hover:text-gold transition-colors"
            activeClassName="text-gold"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/employment"
            className="text-sm font-medium text-navy hover:text-gold transition-colors"
            activeClassName="text-gold"
          >
            Join Us
          </NavLink>
        </nav>

        {/* CTA Button */}
        <Button className="bg-navy text-primary-foreground hover:bg-navy-dark rounded-full px-5">
          Book Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;

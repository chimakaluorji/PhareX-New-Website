import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-gold transition-colors">About</a>
            <a href="#" className="hover:text-gold transition-colors">Services</a>
            <a href="#" className="hover:text-gold transition-colors">Community</a>
            <a href="#" className="hover:text-gold transition-colors">Partners</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/70">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

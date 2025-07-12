import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Services", path: "/services" },
    { name: "Book Now", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348103829933", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-2 lg:px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:justify-between lg:items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-primary">
                LANREX CONTINENTAL
              </h1>
              <p className="text-sm text-muted-foreground">RESOURCES LTD.</p>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors duration-300 px-2 py-1 rounded-md ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+234 810 382 9933</span>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="whatsapp-btn text-sm"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h1 className="text-lg font-playfair font-bold text-primary">
                  LANREX CONTINENTAL
                </h1>
                <p className="text-xs text-muted-foreground">RESOURCES LTD.</p>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="border-t bg-white/95 backdrop-blur-sm">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors duration-300 px-4 py-3 rounded-md ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="px-4 py-3 border-t mt-4 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+234 810 382 9933</span>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="whatsapp-btn text-sm w-full"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

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

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 space-y-4 lg:space-y-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 justify-center lg:justify-start">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">L</span>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-lg lg:text-xl font-playfair font-bold text-primary">
                LANREX CONTINENTAL
              </h1>
              <p className="text-xs lg:text-sm text-muted-foreground">RESOURCES LTD.</p>
            </div>
          </Link>

          {/* Navigation Menu - Always Visible */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 px-2 py-1 rounded-md ${
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
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-xs lg:text-sm text-muted-foreground">
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>+234 810 382 9933</span>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="whatsapp-btn text-xs lg:text-sm"
              size="sm"
            >
              <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
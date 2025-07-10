import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348103829933", "_blank");
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-lg text-white">
                  LANREX CONTINENTAL
                </h3>
                <p className="text-sm text-accent-foreground/80">RESOURCES LTD.</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium car rentals and professional transportation 
              services in Lagos, Nigeria. Quality vehicles, exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Fleet", path: "/fleet" },
                { name: "Services", path: "/services" },
                { name: "Book Now", path: "/booking" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-accent-foreground/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-accent-foreground/80">
                  <p className="font-medium text-white mb-1">Primary Office:</p>
                  <p>Plot 1700 Victoria Island, Lagos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-accent-foreground/80">
                  <p className="font-medium text-white mb-1">Branch Office:</p>
                  <p>No. 28, Ipaja Road, Opposite Ayobo Garage, AP B/Stop, Agege, Lagos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm text-accent-foreground/80">+234 810 382 9933</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm text-accent-foreground/80">lanrexngltd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg text-white">Get In Touch</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </button>
              
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <p className="text-xs text-accent-foreground/60 mt-4">
                Business Hours:<br />
                Mon - Sat: 8:00 AM - 6:00 PM<br />
                Sun: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent-foreground/60">
              © {currentYear} LANREX CONTINENTAL RESOURCES LTD. All rights reserved.
            </p>
            <button 
              onClick={() => window.open("https://wa.me/2348130270031", "_blank")}
              className="text-sm text-accent-foreground/60 hover:text-primary transition-colors cursor-pointer underline"
            >
              The Developer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
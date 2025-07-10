import { ArrowRight, Car, Clock, Shield, Users, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348103829933?text=Hello%20LANREX,%20I%20would%20like%20to%20rent%20a%20car.", "_blank");
  };

  const services = [
    {
      icon: Car,
      title: "Self-Drive Rental",
      description: "Drive yourself with our well-maintained vehicles",
    },
    {
      icon: Users,
      title: "Chauffeur Service",
      description: "Professional drivers for your comfort and safety",
    },
    {
      icon: Shield,
      title: "Corporate Leasing",
      description: "Long-term solutions for businesses and organizations",
    },
    {
      icon: Clock,
      title: "Airport Pickup",
      description: "Reliable airport transfer services 24/7",
    },
  ];

  const features = [
    "Well-maintained vehicles",
    "Competitive pricing",
    "24/7 customer support",
    "Professional drivers",
    "Comprehensive insurance",
    "Flexible rental periods",
  ];

  const carCategories = [
    {
      name: "Economy Cars",
      image: "/lovable-uploads/62461239-dd02-4035-afd1-601ebf5032c0.png",
      description: "Fuel-efficient and affordable for city driving",
    },
    {
      name: "SUVs",
      image: "/lovable-uploads/d1aac870-68fe-4069-b92a-d85c98b5b665.png", 
      description: "Spacious and comfortable for families",
    },
    {
      name: "Luxury Vehicles",
      image: "/lovable-uploads/f78d31ab-057f-42d8-b31d-b2a828c80738.png",
      description: "Premium cars for special occasions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 animate-fade-in">
              Premium Car Rental Services in{" "}
              <span className="text-gradient-gold">Lagos</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-slide-in-right">
              Experience comfort, reliability, and exceptional service with LANREX Continental Resources. 
              Your trusted partner for all transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="btn-secondary text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>
              <Link to="/fleet">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  View Our Fleet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive car rental solutions tailored to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Our Vehicle Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carCategories.map((category, index) => (
              <div key={index} className="car-card group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="car-image group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Link to="/fleet">
                  <Button variant="outline" className="btn-outline w-full">
                    View Vehicles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-6">
                  Why Choose LANREX Continental?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience in the car rental industry, we've built our reputation 
                  on reliability, quality service, and customer satisfaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button className="btn-primary">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-strong">
                  <img 
                    src="/lovable-uploads/3a864a77-1659-41dd-a478-c6e3d37daa68.png" 
                    alt="Luxury vehicle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-gold"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-medium"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your preferred vehicle today and experience the difference with LANREX Continental Resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Booking
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
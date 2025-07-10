import { 
  Car, 
  Users, 
  Building2, 
  Plane, 
  Clock,
  Shield,
  Star,
  CheckCircle,
  MessageCircle,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Self-Drive Rental",
      description: "Take control of your journey with our self-drive rental service. Perfect for independent travelers who prefer to drive themselves.",
      image: "/lovable-uploads/62461239-dd02-4035-afd1-601ebf5032c0.png",
      features: [
        "Wide range of vehicles",
        "Flexible rental periods", 
        "Comprehensive insurance",
        "24/7 roadside assistance",
        "GPS navigation included",
        "Free delivery & pickup"
      ],
      pricing: "Starting from ₦15,000/day",
      popular: true
    },
    {
      icon: Users,
      title: "Chauffeur-Driven Service",
      description: "Sit back and relax while our professional drivers handle the road. Ideal for business meetings, events, and leisure trips.",
      image: "/lovable-uploads/3a864a77-1659-41dd-a478-c6e3d37daa68.png",
      features: [
        "Professional licensed drivers",
        "Uniformed chauffeurs",
        "Local area expertise",
        "Multilingual drivers available",
        "Luxury and economy options",
        "Door-to-door service"
      ],
      pricing: "Starting from ₦25,000/day",
      popular: false
    },
    {
      icon: Building2,
      title: "Corporate Leasing",
      description: "Long-term vehicle solutions for businesses and organizations. Flexible packages tailored to your corporate needs.",
      image: "/lovable-uploads/d1aac870-68fe-4069-b92a-d85c98b5b665.png",
      features: [
        "Flexible lease terms",
        "Fleet management",
        "Maintenance included",
        "Corporate discounts",
        "Multiple vehicle options",
        "Dedicated account manager"
      ],
      pricing: "Custom pricing available",
      popular: false
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      description: "Reliable airport pickup and drop-off services. Never worry about missing your flight or getting stranded.",
      image: "/lovable-uploads/85c8d1c7-57c8-4e01-8586-2182cfdfaf3a.png",
      features: [
        "Flight tracking",
        "Meet & greet service",
        "Luggage assistance",
        "Multiple airports covered",
        "Advance booking available",
        "Real-time updates"
      ],
      pricing: "Starting from ₦10,000",
      popular: true
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your rental needs"
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full coverage protection for peace of mind"
    },
    {
      icon: Star,
      title: "Premium Maintenance",
      description: "Regular servicing ensures vehicle reliability"
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Convenient pickup points across Lagos"
    }
  ];

  const handleWhatsAppInquiry = (serviceName: string) => {
    const message = `Hello LANREX, I'm interested in your ${serviceName} service. Please provide more details about pricing and availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348103829933?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored to meet your specific needs. 
              From self-drive rentals to executive chauffeur services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      {service.popular && (
                        <Badge className="absolute -top-2 left-0 bg-secondary text-secondary-foreground">
                          Most Popular
                        </Badge>
                      )}
                      <div className="flex items-center space-x-4 mb-6 mt-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-playfair font-bold text-primary">
                            {service.title}
                          </h2>
                          <p className="text-lg text-secondary font-semibold">
                            {service.pricing}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          onClick={() => handleWhatsAppInquiry(service.title)}
                          className="btn-primary"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Quote via WhatsApp
                        </Button>
                        <Button variant="outline" className="btn-outline">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-gold"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every rental comes with these premium features and services at no extra cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <Card key={index} className="card-elegant text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide our services across Lagos and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                    Primary Service Areas
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Victoria Island</li>
                    <li>• Ikoyi</li>
                    <li>• Lagos Island</li>
                    <li>• Lekki</li>
                    <li>• Ajah</li>
                    <li>• Surulere</li>
                    <li>• Ikeja</li>
                    <li>• Maryland</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                    Extended Coverage
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Agege</li>
                    <li>• Alimosho</li>
                    <li>• Mushin</li>
                    <li>• Oshodi</li>
                    <li>• Gbagada</li>
                    <li>• Yaba</li>
                    <li>• Magodo</li>
                    <li>• Airport Areas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Don't see your area listed? Contact us for availability in other locations.
              </p>
              <Button 
                onClick={() => handleWhatsAppInquiry("Service Area Inquiry")}
                className="btn-secondary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Check Service Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and let us handle the rest. 
            Professional, reliable, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleWhatsAppInquiry("General Service Inquiry")}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              View Our Fleet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
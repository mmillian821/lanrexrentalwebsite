import { useState } from "react";
import { MessageCircle, Car, Users, Fuel, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Economy", "SUV", "Luxury", "Van"];

  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      category: "Economy",
      image: "/lovable-uploads/62461239-dd02-4035-afd1-601ebf5032c0.png",
      features: ["Automatic", "Air Conditioning", "4 Passengers", "Fuel Efficient"],
      priceRange: "₦15,000 - ₦20,000/day",
      description: "Perfect for city driving and business trips. Reliable, fuel-efficient, and comfortable.",
      specs: {
        seats: 4,
        transmission: "Automatic",
        fuel: "Petrol",
        year: "2018-2020"
      }
    },
    {
      id: 2,
      name: "Toyota Highlander",
      category: "SUV", 
      image: "/lovable-uploads/d1aac870-68fe-4069-b92a-d85c98b5b665.png",
      features: ["Automatic", "Air Conditioning", "7 Passengers", "Spacious"],
      priceRange: "₦25,000 - ₦35,000/day",
      description: "Ideal for family trips and group travel. Spacious interior with excellent safety features.",
      specs: {
        seats: 7,
        transmission: "Automatic", 
        fuel: "Petrol",
        year: "2015-2018"
      }
    },
    {
      id: 3,
      name: "Toyota Land Cruiser Prado",
      category: "Luxury",
      image: "/lovable-uploads/f78d31ab-057f-42d8-b31d-b2a828c80738.png",
      features: ["Automatic", "Leather Seats", "7 Passengers", "4WD"],
      priceRange: "₦40,000 - ₦60,000/day",
      description: "Premium SUV for executives and special occasions. Luxury comfort with robust performance.",
      specs: {
        seats: 7,
        transmission: "Automatic",
        fuel: "Petrol", 
        year: "2017-2020"
      }
    },
    {
      id: 4,
      name: "Honda Accord",
      category: "Economy",
      image: "/lovable-uploads/3385e7b9-2522-4519-ae96-6f4a6f92d4cf.png",
      features: ["Automatic", "Air Conditioning", "4 Passengers", "Reliable"],
      priceRange: "₦18,000 - ₦25,000/day",
      description: "Elegant sedan perfect for business meetings and comfortable city driving.",
      specs: {
        seats: 4,
        transmission: "Automatic",
        fuel: "Petrol",
        year: "2016-2019"
      }
    },
    {
      id: 5,
      name: "Lexus GX",
      category: "Luxury",
      image: "/lovable-uploads/3a864a77-1659-41dd-a478-c6e3d37daa68.png",
      features: ["Automatic", "Premium Interior", "8 Passengers", "4WD"],
      priceRange: "₦50,000 - ₦75,000/day",
      description: "Ultimate luxury SUV with premium amenities and exceptional comfort.",
      specs: {
        seats: 8,
        transmission: "Automatic",
        fuel: "Petrol",
        year: "2016-2019"
      }
    },
    {
      id: 6,
      name: "Toyota Sienna",
      category: "Van",
      image: "/lovable-uploads/85c8d1c7-57c8-4e01-8586-2182cfdfaf3a.png",
      features: ["Automatic", "Air Conditioning", "8 Passengers", "Sliding Doors"],
      priceRange: "₦30,000 - ₦45,000/day",
      description: "Perfect for large groups and family outings. Spacious and comfortable for long trips.",
      specs: {
        seats: 8,
        transmission: "Automatic",
        fuel: "Petrol",
        year: "2015-2018"
      }
    }
  ];

  const filteredVehicles = selectedCategory === "All" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  const handleWhatsAppBooking = (vehicleName: string) => {
    const message = `Hello LANREX, I would like to book the ${vehicleName}. Please provide more details about availability and pricing.`;
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
              Our Premium Fleet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our extensive collection of well-maintained vehicles, 
              perfect for every occasion and budget. From economy cars to luxury SUVs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-[72px] z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-primary" : "btn-outline"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="car-card-featured group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        {vehicle.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                      {vehicle.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">{vehicle.specs.seats} Seats</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Car className="w-4 h-4 text-primary" />
                        <span className="text-sm">{vehicle.specs.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="w-4 h-4 text-primary" />
                        <span className="text-sm">{vehicle.specs.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{vehicle.specs.year}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Price Range</p>
                          <p className="text-lg font-semibold text-primary">{vehicle.priceRange}</p>
                        </div>
                      </div>

                      <Button 
                        onClick={() => handleWhatsAppBooking(vehicle.name)}
                        className="w-full whatsapp-btn"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book via WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-6">
              All Our Vehicles Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Full Insurance</h3>
                <p className="text-sm text-muted-foreground">Comprehensive coverage for peace of mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fuel className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fuel Efficient</h3>
                <p className="text-sm text-muted-foreground">Well-maintained engines for optimal fuel economy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Terms</h3>
                <p className="text-sm text-muted-foreground">Daily, weekly, and monthly rental options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
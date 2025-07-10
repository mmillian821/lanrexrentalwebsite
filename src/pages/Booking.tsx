import { useState } from "react";
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    serviceType: "",
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    specialRequests: ""
  });

  const vehicleTypes = [
    "Toyota Camry (Economy)",
    "Honda Accord (Economy)",
    "Toyota Highlander (SUV)",
    "Toyota Land Cruiser Prado (Luxury)",
    "Lexus GX (Luxury)",
    "Toyota Sienna (Van)"
  ];

  const serviceTypes = [
    "Self-Drive Rental",
    "Chauffeur-Driven Service",
    "Airport Transfer",
    "Corporate Leasing"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'phone', 'vehicleType', 'serviceType', 'pickupDate'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `
🚗 NEW BOOKING REQUEST - LANREX CONTINENTAL

👤 CUSTOMER DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

🚙 SERVICE DETAILS:
Vehicle: ${formData.vehicleType}
Service Type: ${formData.serviceType}
Pickup Date: ${formData.pickupDate}
Return Date: ${formData.returnDate || 'Same day'}
Pickup Time: ${formData.pickupTime || 'To be confirmed'}

📍 LOCATIONS:
Pickup: ${formData.pickupLocation || 'To be confirmed'}
Drop-off: ${formData.dropoffLocation || 'Same as pickup'}

📝 SPECIAL REQUESTS:
${formData.specialRequests || 'None'}

Please confirm availability and provide pricing details. Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348103829933?text=${encodedMessage}`, "_blank");

    toast({
      title: "Booking Request Sent!",
      description: "You're being redirected to WhatsApp. We'll respond to your booking request shortly.",
    });
  };

  const quickBookingOptions = [
    {
      title: "Airport Pickup",
      description: "Murtala Muhammed Airport to any Lagos location",
      action: () => {
        setFormData(prev => ({
          ...prev,
          serviceType: "Airport Transfer",
          pickupLocation: "Murtala Muhammed Airport"
        }));
      }
    },
    {
      title: "Business Meeting",
      description: "Professional chauffeur for your business needs",
      action: () => {
        setFormData(prev => ({
          ...prev,
          serviceType: "Chauffeur-Driven Service",
          vehicleType: "Toyota Camry (Economy)"
        }));
      }
    },
    {
      title: "Family Trip",
      description: "Spacious SUV for family outings",
      action: () => {
        setFormData(prev => ({
          ...prev,
          serviceType: "Self-Drive Rental",
          vehicleType: "Toyota Highlander (SUV)"
        }));
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              Book Your Vehicle
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reserve your preferred vehicle in just a few steps. 
              Fill out the form below and we'll confirm your booking via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Booking Options */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
              Quick Booking Options
            </h2>
            <p className="text-muted-foreground">
              Choose a preset option to speed up your booking process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickBookingOptions.map((option, index) => (
              <Card key={index} className="card-elegant hover-lift cursor-pointer" onClick={option.action}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-primary">
                      Booking Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold text-primary border-b border-border pb-2">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>Full Name *</span>
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>Phone Number *</span>
                            </Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="+234 800 000 0000"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Email Address</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      {/* Vehicle & Service */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold text-primary border-b border-border pb-2">
                          Vehicle & Service
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="flex items-center space-x-2">
                              <Car className="w-4 h-4" />
                              <span>Vehicle Type *</span>
                            </Label>
                            <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange("vehicleType", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                              <SelectContent>
                                {vehicleTypes.map((vehicle) => (
                                  <SelectItem key={vehicle} value={vehicle}>
                                    {vehicle}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Service Type *</Label>
                            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                              <SelectContent>
                                {serviceTypes.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold text-primary border-b border-border pb-2">
                          Date & Time
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="pickupDate" className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Pickup Date *</span>
                            </Label>
                            <Input
                              id="pickupDate"
                              type="date"
                              value={formData.pickupDate}
                              onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="returnDate" className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Return Date</span>
                            </Label>
                            <Input
                              id="returnDate"
                              type="date"
                              value={formData.returnDate}
                              onChange={(e) => handleInputChange("returnDate", e.target.value)}
                              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          <div>
                            <Label htmlFor="pickupTime" className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>Pickup Time</span>
                            </Label>
                            <Input
                              id="pickupTime"
                              type="time"
                              value={formData.pickupTime}
                              onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Locations */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold text-primary border-b border-border pb-2">
                          Locations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="pickupLocation" className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>Pickup Location</span>
                            </Label>
                            <Input
                              id="pickupLocation"
                              value={formData.pickupLocation}
                              onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                              placeholder="Enter pickup address"
                            />
                          </div>
                          <div>
                            <Label htmlFor="dropoffLocation" className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>Drop-off Location</span>
                            </Label>
                            <Input
                              id="dropoffLocation"
                              value={formData.dropoffLocation}
                              onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                              placeholder="Enter drop-off address"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                          placeholder="Any special requirements or additional information..."
                          rows={4}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" className="w-full btn-primary text-lg py-3">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send Booking Request via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Summary & Contact */}
              <div className="space-y-6">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-primary">
                      Booking Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Fill the Form</h4>
                        <p className="text-sm text-muted-foreground">Complete your booking details</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">WhatsApp Redirect</h4>
                        <p className="text-sm text-muted-foreground">Your details will be sent via WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Quick Confirmation</h4>
                        <p className="text-sm text-muted-foreground">We'll confirm availability and pricing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-primary">
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-sm">+234 810 382 9933</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm">lanrexngltd@gmail.com</span>
                    </div>
                    <Button 
                      onClick={() => window.open("https://wa.me/2348103829933", "_blank")}
                      className="w-full whatsapp-btn"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
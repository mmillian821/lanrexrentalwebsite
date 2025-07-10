import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `
📞 CONTACT FORM SUBMISSION - LANREX CONTINENTAL

👤 CONTACT DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

💬 MESSAGE:
${formData.message}

Please respond to this inquiry. Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348103829933?text=${encodedMessage}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "You're being redirected to WhatsApp. We'll respond to your message shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Primary Office",
      details: [
        "Plot 1700 Victoria Island",
        "Lagos, Nigeria"
      ]
    },
    {
      icon: MapPin,
      title: "Branch Office",
      details: [
        "No. 28, Ipaja Road",
        "Opposite Ayobo Garage, AP B/Stop",
        "Agege, Lagos"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 810 382 9933"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["lanrexngltd@gmail.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with LANREX Continental Resources. We're here to help 
              with all your car rental and transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="card-elegant text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-primary">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+234 800 000 0000"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            placeholder="Message subject"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Quick Actions */}
              <div className="space-y-6">
                {/* Google Maps Embed */}
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-primary">
                      Our Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7999999999997!2d3.421!3d6.431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c7e1234567%3A0x1234567890abcdef!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="LANREX Continental Resources Locations"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Actions */}
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-primary">
                      Quick Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={() => window.open("https://wa.me/2348103829933", "_blank")}
                      className="w-full whatsapp-btn"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                    
                    <Button 
                      onClick={() => window.open("tel:+2348103829933", "_self")}
                      variant="outline"
                      className="w-full btn-outline"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us Now
                    </Button>
                    
                    <Button 
                      onClick={() => window.open("mailto:lanrexngltd@gmail.com", "_self")}
                      variant="outline"
                      className="w-full btn-outline"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="card-elegant bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">
                      24/7 Emergency Support
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Need immediate assistance? We're available round the clock for emergencies.
                    </p>
                    <Button 
                      onClick={() => window.open("tel:+2348103829933", "_self")}
                      size="sm"
                      className="btn-secondary"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Hotline
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-lg text-primary mb-2">
                    What documents do I need to rent a car?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    You'll need a valid driver's license, national ID or international passport, 
                    and a credit card or cash deposit.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-lg text-primary mb-2">
                    Do you offer airport pickup services?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we provide 24/7 airport pickup and drop-off services at 
                    Murtala Muhammed Airport and other locations in Lagos.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-lg text-primary mb-2">
                    What is your cancellation policy?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We offer flexible cancellation options. Please contact us via WhatsApp 
                    for specific terms based on your booking.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-lg text-primary mb-2">
                    Are your vehicles insured?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, all our vehicles come with comprehensive insurance coverage 
                    for your protection and peace of mind.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're here to help!
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/2348103829933?text=Hello%20LANREX,%20I%20have%20a%20question%20about%20your%20services.", "_blank")}
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
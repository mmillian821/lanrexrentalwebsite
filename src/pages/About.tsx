import { Shield, Target, Eye, Award, Users, Car, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can trust for all your transportation needs.",
    },
    {
      icon: Star,
      title: "Quality",
      description: "Well-maintained vehicles and professional service standards in everything we do.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "Timely service and prompt responses because your time is valuable to us.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Fleet Vehicles" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  const team = [
    {
      name: "Professional Drivers",
      description: "Licensed, experienced, and courteous drivers who prioritize your safety and comfort.",
      image: "/lovable-uploads/85c8d1c7-57c8-4e01-8586-2182cfdfaf3a.png",
    },
    {
      name: "Maintenance Team",
      description: "Skilled technicians ensuring our fleet remains in perfect condition.",
      image: "/lovable-uploads/2831de42-d7e5-4614-ab3d-fa5f5181188c.png",
    },
    {
      name: "Customer Service",
      description: "Dedicated support staff ready to assist you 24/7 with any inquiries.",
      image: "/lovable-uploads/098a603e-65ed-4891-ae6e-f9e94888dffe.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              About LANREX Continental Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Established as Lagos' premier car rental service, we've been providing 
              exceptional transportation solutions with a commitment to quality, 
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    LANREX Continental Resources Ltd. was founded with a simple yet powerful vision: 
                    to provide Lagos residents and visitors with access to reliable, high-quality 
                    vehicles and exceptional service standards.
                  </p>
                  <p>
                    Starting from our primary location at Plot 1700 Victoria Island and expanding 
                    to our branch office at Ipaja Road, Agege, we've grown to become one of Lagos' 
                    most trusted car rental companies.
                  </p>
                  <p>
                    Our success is built on understanding our customers' diverse needs – from 
                    business executives requiring luxury vehicles to families needing spacious 
                    SUVs for weekend getaways. We've curated our fleet and services to serve 
                    every segment of the market with excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                  <img 
                    src="/lovable-uploads/3385e7b9-2522-4519-ae96-6f4a6f92d4cf.png" 
                    alt="LANREX vehicles"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional car rental and transportation services that exceed 
                    customer expectations while maintaining the highest standards of safety, 
                    reliability, and professionalism. We strive to make every journey 
                    comfortable, convenient, and memorable.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading car rental company in Nigeria, recognized for 
                    innovation, exceptional service, and our contribution to seamless 
                    transportation solutions. We envision a future where every traveler 
                    chooses LANREX for their mobility needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-playfair font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Our Professional Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who make your experience exceptional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-elegant hover-lift">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-3">{member.name}</h3>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-6">
              Why Choose LANREX Continental?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Premium Fleet</h3>
                <p className="text-muted-foreground">
                  Well-maintained vehicles from trusted brands, regularly serviced for optimal performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Commitment to delivering exceptional service that exceeds industry standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Customer Care</h3>
                <p className="text-muted-foreground">
                  Dedicated support team available round the clock to assist with your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Droplet, Users, Globe, TreePine } from "lucide-react";
import dronesImage from "@/assets/drones-agriculture.jpg";

const Impact = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description: "Monitor deforestation, biodiversity, and ecosystem health across Africa"
    },
    {
      icon: Droplet,
      title: "Water Resource Management",
      description: "Track water bodies, predict droughts, and optimize irrigation systems"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Support sustainable development and poverty reduction initiatives"
    },
    {
      icon: TreePine,
      title: "Climate Action",
      description: "Monitor climate change impacts and support mitigation strategies"
    },
    {
      icon: Globe,
      title: "Disaster Response",
      description: "Rapid geospatial intelligence for humanitarian crises and natural disasters"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${dronesImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <Heart className="w-20 h-20 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Giospatial Impact
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Leveraging geospatial technology for social good and sustainable development
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground" onClick={() => window.location.assign('/#contact')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Giospatial Impact is dedicated to using geospatial technology as a force for positive change. 
              We partner with NGOs, governments, and communities to address critical environmental and social 
              challenges across Africa, providing pro-bono and subsidized services where they matter most.
            </p>
          </div>

          {/* Initiatives */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <Card 
                  key={initiative.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "50+", label: "Conservation Projects" },
              { value: "2M+", label: "Hectares Monitored" },
              { value: "100+", label: "Communities Supported" },
              { value: "20+", label: "NGO Partners" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner with us for impact
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you an NGO or organization working on environmental or social initiatives? 
            Let's discuss how we can support your mission with geospatial technology.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.assign('/#contact')}>
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;

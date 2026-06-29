import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Globe, Satellite, Database, Shield, Zap } from "lucide-react";
import { techMapGrid as techMapImage } from "@/assets/images";

const Platforms = () => {
  const platforms = [
    {
      icon: Globe,
      title: "Giospatial Earth Monitor",
      description: "Real-time Earth observation platform for monitoring environmental changes and natural resources"
    },
    {
      icon: Cloud,
      title: "Giospatial Cloud",
      description: "Scalable cloud infrastructure for storing, processing, and analyzing geospatial data"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Enterprise-grade spatial data management and versioning systems"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze satellite imagery as it arrives"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise security with full data sovereignty"
    },
    {
      icon: Satellite,
      title: "Multi-source Integration",
      description: "Integrate data from multiple satellite providers"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${techMapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <Cloud className="w-20 h-20 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Giospatial Platforms
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Cloud-based SaaS platforms for Earth observation and spatial data management
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground" onClick={() => window.location.assign('/#contact')}>
              Try Our Platforms
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Platforms</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card 
                  key={platform.title}
                  className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{platform.title}</h3>
                  <p className="text-muted-foreground text-center">{platform.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Features */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Platform Features</h3>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-12" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to experience our platforms?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with a demo or free trial of our cloud-based geospatial platforms
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.assign('/#contact')}>
            Request Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platforms;

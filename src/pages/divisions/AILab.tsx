import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrainCircuit, Cpu, Eye, Layers, Zap, Sparkles } from "lucide-react";
import { dataLandscape as dataLandscapeImage } from "@/assets/images";

const AILab = () => {
  const capabilities = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Automated feature extraction and object detection from satellite and aerial imagery"
    },
    {
      icon: Layers,
      title: "Deep Learning Models",
      description: "Custom neural networks for land cover classification and change detection"
    },
    {
      icon: Cpu,
      title: "ML Pipeline",
      description: "End-to-end machine learning workflows for geospatial intelligence"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Fast inference and prediction on streaming geospatial data"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Intelligent pattern recognition and anomaly detection"
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
            backgroundImage: `url(${dataLandscapeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <BrainCircuit className="w-20 h-20 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Giospatial AI Lab
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Pioneering AI and machine learning solutions for geospatial intelligence
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground" onClick={() => window.location.assign('/#contact')}>
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">AI Capabilities</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge artificial intelligence and machine learning technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card 
                  key={capability.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Innovation Through Research
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Our AI Lab is at the forefront of geospatial AI research, developing novel algorithms 
              and methodologies that push the boundaries of what's possible with Earth observation data.
            </p>
            <div className="text-center mt-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.assign('/#contact')}>
                Learn About Our Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AILab;

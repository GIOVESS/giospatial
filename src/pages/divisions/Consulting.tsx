import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, Target, TrendingUp } from "lucide-react";
import earthNetworkImage from "@/assets/earth-network.jpg";

const Consulting = () => {
  const services = [
    {
      icon: Users,
      title: "Strategic Consulting",
      description: "Expert guidance on GIS strategy, implementation, and digital transformation"
    },
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Comprehensive courses in GIS, remote sensing, and spatial data science"
    },
    {
      icon: Award,
      title: "Certification Prep",
      description: "Prepare for industry-recognized GIS and remote sensing certifications"
    },
    {
      icon: Target,
      title: "Custom Workshops",
      description: "Tailored training workshops for your organization's specific needs"
    },
    {
      icon: TrendingUp,
      title: "Capacity Building",
      description: "Long-term programs to build in-house geospatial capabilities"
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
            backgroundImage: `url(${earthNetworkImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Consulting & Training
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Expert consulting and comprehensive training in GIS, remote sensing, and spatial data science
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground" onClick={() => window.location.assign('/#contact')}>
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional development and strategic guidance for geospatial excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Training Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">GIS Fundamentals</h3>
                <p className="text-muted-foreground">
                  Master the essentials of Geographic Information Systems, from basic concepts to advanced analysis
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Remote Sensing</h3>
                <p className="text-muted-foreground">
                  Learn satellite image processing, interpretation, and Earth observation techniques
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Spatial Data Science</h3>
                <p className="text-muted-foreground">
                  Apply Python, R, and machine learning to geospatial data analysis
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Web GIS</h3>
                <p className="text-muted-foreground">
                  Build interactive web mapping applications and geospatial APIs
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.assign('/#contact')}>
                View Course Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;

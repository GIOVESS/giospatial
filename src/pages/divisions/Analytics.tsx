import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MarqueeBand from "@/components/MarqueeBand";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Map, Database, Brain, Target } from "lucide-react";
import { analyticsDashboardPhoto as gisMapImage } from "@/assets/images";

const Analytics = () => {
  const services = [
    {
      icon: Map,
      title: "Spatial Analysis",
      description: "Geospatial modelling and spatial data analysis for teams making location-based decisions"
    },
    {
      icon: TrendingUp,
      title: "Data Visualization",
      description: "Interactive maps and dashboards built from complex, multi-source datasets"
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Processing pipelines built to handle large geospatial datasets at scale"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Statistical models for forecasting trends and spatial patterns"
    },
    {
      icon: Target,
      title: "Custom Dashboards",
      description: "Analytics dashboards built to each client's own reporting needs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <PageBreadcrumbs trail={[{ label: "Divisions" }, { label: "Analytics" }]} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${gisMapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <BarChart3 className="w-20 h-20 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Giospatial Analytics
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Spatial analysis and visualization for teams making decisions from geospatial data
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground" onClick={() => window.location.assign('/#contact')}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <MarqueeBand items={["Analytics", "GeoAI", "PostGIS", "Spatial Intelligence", "GIOSPATIAL"]} />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Geospatial analytics services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-6 hover:shadow-elegant transition-all duration-300"
                  data-reveal
                  data-delay={String(Math.min(index + 1, 5))}
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

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to unlock insights from your data?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our analytics solutions can transform your operations
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.assign('/#contact')}>
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;

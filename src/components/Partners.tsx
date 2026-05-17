import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "Esri", category: "GIS Technology" },
    { name: "Google Earth Engine", category: "Earth Observation" },
    { name: "Copernicus", category: "Satellite Data" },
    { name: "NASA", category: "Space Agency" },
    { name: "Planet Labs", category: "Satellite Imagery" },
    { name: "Mapbox", category: "Mapping Platform" },
    { name: "AWS", category: "Cloud Services" },
    { name: "Microsoft Azure", category: "Cloud Platform" },
    { name: "UN Environment", category: "International Org" },
    { name: "African Union", category: "Regional Body" },
    { name: "World Bank", category: "Development Finance" },
    { name: "FAO", category: "Agriculture" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Partners & Collaborations</h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working with leading organizations to deliver world-class geospatial solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground">{partner.category}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <p className="text-sm text-muted-foreground mb-2">Trusted by</p>
            <p className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">50+</p>
            <p className="text-lg text-foreground font-semibold mt-2">Organizations Worldwide</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Building2, Sprout, Zap } from "lucide-react";

const sectors = [
  {
    icon: Droplets,
    title: "Environmental Resilience",
    subtitle: "Managing Water and Forests in Real-Time",
    color: "primary",
    useCases: [
      { name: "Dynamic Flood Risk", context: "East Africa", tech: "Sentinel-1 SAR · ML submerged zone prediction" },
      { name: "Invasive Species Mapping", context: "Major Water Bodies", tech: "AFRI/NDVI multispectral · PostGIS alert pipeline" },
      { name: "Deforestation Alerts", context: "Forest Reserves", tech: "Change Detection · 24-hr PostGIS alerts" },
    ],
  },
  {
    icon: Building2,
    title: "Urban Intelligence",
    subtitle: "Designing Liveable and Equitable Cities",
    color: "secondary",
    useCases: [
      { name: "Urban Heat & Green Space", context: "African Cities", tech: "Landsat 8/9 LST · NDVI Green Equity maps" },
      { name: "Informal Settlement Mapping", context: "High-Density Zones", tech: "High-Res Maxar + YOLOv8 Object Detection" },
      { name: "Real Estate Safety Scoring", context: "Land & Property", tech: "Flood risk + riparian buffers · Public API" },
    ],
  },
  {
    icon: Sprout,
    title: "Food Security & Biodiversity",
    subtitle: "Balancing Yields with Nature",
    color: "accent",
    useCases: [
      { name: "Precision Agriculture", context: "Smallholder Farms", tech: "Sentinel-2 NDVI · SMS crop health alerts" },
      { name: "Human-Wildlife Conflict", context: "Conservation Areas", tech: "Random Forest conflict probability mapping" },
      { name: "Yield & Disease Forecasting", context: "Africa-wide", tech: "Computer Vision · early detection systems" },
    ],
  },
  {
    icon: Zap,
    title: "Infrastructure & Energy",
    subtitle: "Powering and Connecting the Continent",
    color: "primary",
    useCases: [
      { name: "Renewable Energy Suitability", context: "Energy Ministries", tech: "GHI · DEM slope · grid proximity analysis" },
      { name: "Smart Logistics Routing", context: "Remote Communities", tech: "pgRouting · PostGIS · flood-resilient routing" },
      { name: "Site Suitability Analysis", context: "Enterprise Investment", tech: "Multi-layer GIS · GeoPandas · Python" },
    ],
  },
];

const getColors = (color: string) => {
  switch (color) {
    case "primary":
      return { icon: "text-primary", iconBg: "bg-primary/10", badge: "border-primary/20 text-primary", accent: "border-l-primary" };
    case "secondary":
      return { icon: "text-secondary", iconBg: "bg-secondary/10", badge: "border-secondary/20 text-secondary", accent: "border-l-secondary" };
    case "accent":
      return { icon: "text-accent", iconBg: "bg-accent/10", badge: "border-accent/20 text-accent", accent: "border-l-accent" };
    default:
      return { icon: "text-foreground", iconBg: "bg-muted", badge: "border-border text-foreground", accent: "border-l-border" };
  }
};

const Sectors = () => {
  return (
    <section id="sectors" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise Geospatial Systems Across Africa
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Africa's landscape demands dynamic, real-time intelligence. Giospatial Labs
            engineers end-to-end geospatial systems across four interconnected domains —
            each built for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const colors = getColors(sector.color);
            return (
              <Card
                key={sector.title}
                className={`p-6 border-l-4 ${colors.accent} hover:shadow-elegant transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`${colors.iconBg} w-11 h-11 rounded-lg flex items-center justify-center shrink-0`}>
                    <Icon className={colors.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{sector.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{sector.subtitle}</p>
                  </div>
                </div>

                {/* Use cases */}
                <div className="space-y-3">
                  {sector.useCases.map((uc) => (
                    <div key={uc.name} className="bg-muted/40 rounded-lg p-3">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-foreground">{uc.name}</span>
                        <Badge
                          variant="outline"
                          className={`text-[10px] shrink-0 ${colors.badge} border`}
                        >
                          {uc.context}
                        </Badge>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-mono">{uc.tech}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Gap callout */}
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="border border-secondary/25 rounded-xl p-5 bg-secondary/5 flex items-start gap-3">
            <div className="w-1 self-stretch bg-secondary rounded-full shrink-0" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-bold text-foreground">The Gap:</span> Traditional mapping tools
              stop at visualisation. Africa's modern enterprises need{" "}
              <span className="text-secondary font-semibold">end-to-end geospatial architecture</span>{" "}
              — from satellite ingestion to decision-ready APIs. Giospatial Labs engineers exactly that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;

import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Zap, TrendingUp, Waves, Wheat, Users, ArrowRight } from "lucide-react";
import { giovanniBwayo as giovanni } from "@/assets/images";

const challenges = [
  {
    icon: TrendingUp,
    title: "Fragmented Spatial Data",
    description:
      "Organisations across Africa operate on siloed, static datasets. Real decisions demand unified, near-real-time spatial intelligence at scale.",
  },
  {
    icon: Waves,
    title: "Weak Geospatial Architecture",
    description:
      "Traditional GIS tools stop at visualisation. Modern enterprises need end-to-end systems — from satellite ingestion to API-ready decision layers.",
  },
  {
    icon: Wheat,
    title: "Rapidly Changing Landscapes",
    description:
      "Climate shifts, urban expansion, and resource pressure demand systems that move from observation to prediction — not yesterday's static maps.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="leadership" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transforming How Africa Interacts with Spatial Data
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We go beyond traditional mapping. Giospatial Labs engineers end-to-end geospatial
            systems — from satellite ingestion to enterprise decision APIs — designed to operate
            at the speed and scale that Africa's modern organisations demand.
          </p>
        </div>

        {/* 2026 Landscape challenges */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Why Geo-Intelligence — The Challenges We Solve
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className="p-5 text-center hover:shadow-elegant transition-all duration-300 border-t-2 border-t-secondary/30">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mission / Vision / Approach */}
          <div className="space-y-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-lg">
                  <Target className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To transform how organisations across Africa understand and interact with
                    spatial data — delivering geo-intelligence that drives real decisions, not
                    just better maps.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-2.5 rounded-lg">
                  <Eye className="text-secondary" size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be Africa's leading geo-intelligence and data technology company — the
                    infrastructure layer that modern enterprises rely on to understand, navigate,
                    and act on spatial data at continental scale.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg">
                  <Zap className="text-accent" size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">Our Approach</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We engineer end-to-end geospatial systems — from satellite data acquisition and
                    geo-processing pipelines to enterprise APIs and decision dashboards. Location data
                    is only as valuable as the architecture supporting it.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Founder teaser — full profile + rest of the team live on /team */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-secondary rounded-xl blur-xl opacity-25" />
                  <img
                    src={giovanni}
                    alt="Giovanni Bwayo — Founder, CEO & Chief GIS Developer, Giospatial Labs"
                    className="relative w-44 h-44 rounded-xl object-cover border-2 border-secondary/25"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Giovanni Bwayo</h3>
                <p className="text-secondary text-sm font-semibold mb-5">
                  Founder, CEO &amp; Chief GIS Developer
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A technology executive and geospatial innovator leading the company's vision at the
                  intersection of artificial intelligence, GeoAI, and GIS.
                </p>
                <Button onClick={() => navigate("/team")} variant="outline" className="group">
                  <Users size={16} className="mr-2" />
                  Meet the full team
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

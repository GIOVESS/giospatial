import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";

const Divisions = () => {
  const navigate = useNavigate();

  const divisions = [
    {
      icon: BarChart3,
      title: "Giospatial Analytics",
      description:
        "Advanced spatial analysis and data visualization services transforming complex geospatial data into actionable insights for strategic decision-making.",
      color: "primary",
      path: "/divisions/analytics",
    },
    {
      icon: BrainCircuit,
      title: "Giospatial AI Lab",
      description:
        "Cutting-edge AI and machine learning solutions for geospatial intelligence, predictive modeling, and automated feature extraction from satellite imagery.",
      color: "secondary",
      path: "/divisions/ai-lab",
    },
    {
      icon: Cloud,
      title: "Giospatial Platforms",
      description:
        "Cloud-based SaaS platforms including Giospatial Earth Monitor and Giospatial Cloud for real-time Earth observation and spatial data management.",
      color: "accent",
      path: "/divisions/platforms",
    },
    {
      icon: GraduationCap,
      title: "Giospatial Consulting & Training",
      description:
        "Expert consulting services and comprehensive training programs in GIS, remote sensing, and spatial data science for organizations and professionals.",
      color: "primary",
      path: "/divisions/consulting",
    },
    {
      icon: Heart,
      title: "Giospatial Impact",
      description:
        "Dedicated to leveraging geospatial technology for social good, environmental conservation, and sustainable development initiatives across Africa.",
      color: "secondary",
      path: "/divisions/impact",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          border: "hover:border-primary/50",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/10",
          iconText: "text-secondary",
          border: "hover:border-secondary/50",
        };
      case "accent":
        return {
          iconBg: "bg-accent/10",
          iconText: "text-accent",
          border: "hover:border-accent/50",
        };
      default:
        return {
          iconBg: "bg-muted",
          iconText: "text-foreground",
          border: "hover:border-border",
        };
    }
  };

  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Divisions</h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Five specialized divisions working together to deliver comprehensive geospatial solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const colors = getColorClasses(division.color);
            return (
              <Card
                key={division.title}
                className={`p-6 hover:shadow-elegant transition-all duration-300 border-2 ${colors.border} animate-fade-up group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(division.path)}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={colors.iconText} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{division.title}</h3>
                <p className="text-muted-foreground mb-4">{division.description}</p>
                <Button
                  variant="ghost"
                  className={`${colors.iconText} hover:bg-transparent p-0 group-hover:translate-x-2 transition-transform`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(division.path);
                  }}
                >
                  Learn more <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Divisions;

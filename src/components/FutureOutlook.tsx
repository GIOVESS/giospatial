import { Card } from "@/components/ui/card";
import { Rocket, TrendingUp, Globe2 } from "lucide-react";
import { africaMap } from "@/assets/images";

const FutureOutlook = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${africaMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Future Outlook</h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scaling spatial innovation across Kenya and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Rocket,
              title: "Innovation First",
              description: "Continuously developing cutting-edge AI and machine learning capabilities for spatial intelligence",
              color: "primary",
            },
            {
              icon: TrendingUp,
              title: "Expanding Reach",
              description: "Growing our presence across Kenya's 47 counties and East Africa by 2027",
              color: "secondary",
            },
            {
              icon: Globe2,
              title: "Global Impact",
              description: "Contributing to UN Sustainable Development Goals through geospatial technology",
              color: "accent",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            const isPrimary = item.color === "primary";
            const isSecondary = item.color === "secondary";
            return (
              <Card
                key={item.title}
                className="p-8 text-center hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${
                    isPrimary ? "bg-primary/10" : isSecondary ? "bg-secondary/10" : "bg-accent/10"
                  } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    className={`${
                      isPrimary ? "text-primary" : isSecondary ? "text-secondary" : "text-accent"
                    }`}
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Card className="p-10 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-relaxed">
                "By 2030, we envision a continent where every decision-maker has access to precise, actionable
                spatial intelligence."
              </p>
              <p className="text-lg text-muted-foreground">
                We're building the infrastructure for Kenya's data-driven future, one location at a time.
              </p>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureOutlook;

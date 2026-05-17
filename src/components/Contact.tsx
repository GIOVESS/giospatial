import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Globe, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your spatial data into strategic insights? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                      <p className="text-muted-foreground">Nakuru, Kenya</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@giospatial.org"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@giospatial.org
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Globe className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Website</h4>
                      <a
                        href="https://giospatial.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        www.giospatial.org
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/giospatial" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
                  >
                    <Linkedin size={20} />
                  </Button>
                </a>
                <a href="https://twitter.com/giospatial" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-accent/10 hover:text-accent hover:border-accent transition-all"
                  >
                    <Twitter size={20} />
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <Card className="overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036108354!2d36.01903!3d-0.303099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Giospatial Location"
              />
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="How can we help?" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={6} required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-secondary shadow-glow"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

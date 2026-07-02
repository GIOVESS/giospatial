import { Mail, FileText, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const inputClass =
  "w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder-foreground/30 border border-black/[0.1] focus:border-[#265B01] focus:ring-1 focus:ring-[#265B01]/25 focus:outline-none transition-all";
const inputStyle = { background: "#ffffff" };

const ContactSales = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message received", description: "Our sales team will respond within one business day." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
          >
            Contact Sales
          </span>
          <h2
            className="font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Talk to a solutions engineer
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            Ready to deploy an enterprise geospatial system? Our team responds within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: direct contact */}
          <div data-reveal>
            {/* HQ card */}
            <div
              className="rounded-xl border border-black/[0.08] p-6 mb-8"
              style={{ background: "#ffffff", borderLeft: "3px solid #265B01" }}
            >
              <h3 className="font-black text-foreground mb-2 tracking-widest" style={{ fontSize: 15, letterSpacing: "0.06em" }}>
                GIOSPATIAL
              </h3>
              <div className="flex items-center gap-2 mb-5" style={{ color: "#5a5a5a", fontSize: 13 }}>
                <MapPin size={13} className="text-[#265B01]" />
                Nakuru, Kenya
              </div>

              <a
                href="tel:+254708187019"
                className="block font-bold text-foreground hover:text-[#265B01] transition-colors mb-1"
                style={{ fontSize: 28, letterSpacing: "-0.02em" }}
              >
                +254 708 187 019
              </a>
              <p style={{ color: "#888", fontSize: 12 }}>Business hours EAT, Mon–Fri</p>
            </div>

            {/* Contact option cards */}
            <div className="space-y-3">
              <div
                className="rounded-xl border border-black/[0.08] p-5 flex items-start gap-4 hover:border-[#265B01]/40 transition-colors cursor-pointer"
                style={{ background: "#ffffff" }}
                onClick={() => window.location.href = "mailto:sales@giospatial.org"}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(38,91,1,0.1)", border: "1px solid rgba(38,91,1,0.15)" }}
                >
                  <Mail size={16} className="text-[#265B01]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5" style={{ fontSize: 14 }}>
                    Email sales directly
                  </h4>
                  <p style={{ color: "#5a5a5a", fontSize: 13 }}>
                    sales@giospatial.org
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl border border-black/[0.08] p-5 flex items-start gap-4 hover:border-[#265B01]/40 transition-colors cursor-pointer"
                style={{ background: "#ffffff" }}
                onClick={() => document.querySelector<HTMLInputElement>("#contact form input")?.focus()}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(38,91,1,0.1)", border: "1px solid rgba(38,91,1,0.15)" }}
                >
                  <FileText size={16} className="text-[#265B01]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5" style={{ fontSize: 14 }}>
                    Submit an enquiry
                  </h4>
                  <p style={{ color: "#5a5a5a", fontSize: 13 }}>
                    Fill the form — a solutions engineer responds in 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div data-reveal data-delay="2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your organisation"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@organisation.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-2">
                  Use Case / Challenge
                </label>
                <select
                  className={`${inputClass} appearance-none`}
                  style={{ ...inputStyle, color: "rgba(20,27,68,0.7)" }}
                >
                  <option value="">Select a domain</option>
                  <option>Water Resource Management</option>
                  <option>Urban Intelligence</option>
                  <option>Precision Agriculture</option>
                  <option>Environmental Compliance</option>
                  <option>Infrastructure & Energy</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project and goals..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-lg font-semibold text-accent-foreground text-sm transition-all hover:opacity-90 disabled:opacity-60 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "#141B44", boxShadow: "0 0 20px rgba(20,27,68,0.2)" }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>

              <p style={{ color: "#909090", fontSize: 11, textAlign: "center" }}>
                We respond within one business day · EAT timezone
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;

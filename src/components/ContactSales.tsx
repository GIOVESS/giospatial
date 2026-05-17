import { Mail, FileText, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const inputClass =
  "w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 border border-white/[0.08] focus:border-[#00a0e3] focus:ring-1 focus:ring-[#00a0e3]/25 focus:outline-none transition-all";
const inputStyle = { background: "rgba(255,255,255,0.03)" };

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
    <section id="contact" style={{ background: "#111111", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            Contact Sales
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Talk to a solutions engineer
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            Ready to deploy an enterprise geospatial system? Our team responds within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: direct contact */}
          <div data-reveal>
            {/* HQ card */}
            <div
              className="rounded-xl border border-white/[0.08] p-6 mb-8"
              style={{ background: "#0a0a0a", borderLeft: "3px solid #00a0e3" }}
            >
              <h3 className="font-black text-white mb-2 tracking-widest" style={{ fontSize: 15, letterSpacing: "0.06em" }}>
                GIOSPATIAL
              </h3>
              <div className="flex items-center gap-2 mb-5" style={{ color: "#7a7a7a", fontSize: 13 }}>
                <MapPin size={13} className="text-[#00a0e3]" />
                Nakuru, Kenya · East Africa
              </div>

              <a
                href="tel:+254700000000"
                className="block font-bold text-white hover:text-[#00a0e3] transition-colors mb-1"
                style={{ fontSize: 28, letterSpacing: "-0.02em" }}
              >
                +254 700 000 000
              </a>
              <p style={{ color: "#606060", fontSize: 12 }}>Business hours EAT, Mon–Fri</p>
              <button
                className="mt-2 text-xs text-[#00a0e3] hover:underline"
                onClick={() => {}}
              >
                Outside East Africa →
              </button>
            </div>

            {/* Contact option cards */}
            <div className="space-y-3">
              <div
                className="rounded-xl border border-white/[0.08] p-5 flex items-start gap-4 hover:border-[#00a0e3]/40 transition-colors cursor-pointer"
                style={{ background: "#0a0a0a" }}
                onClick={() => window.location.href = "mailto:sales@giospatial.org"}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,160,227,0.1)", border: "1px solid rgba(0,160,227,0.15)" }}
                >
                  <Mail size={16} className="text-[#00a0e3]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5" style={{ fontSize: 14 }}>
                    Email sales directly
                  </h4>
                  <p style={{ color: "#7a7a7a", fontSize: 13 }}>
                    sales@giospatial.org
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl border border-white/[0.08] p-5 flex items-start gap-4 hover:border-[#00a0e3]/40 transition-colors cursor-pointer"
                style={{ background: "#0a0a0a" }}
                onClick={() => document.querySelector<HTMLInputElement>("#contact form input")?.focus()}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,160,227,0.1)", border: "1px solid rgba(0,160,227,0.15)" }}
                >
                  <FileText size={16} className="text-[#00a0e3]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5" style={{ fontSize: 14 }}>
                    Submit an enquiry
                  </h4>
                  <p style={{ color: "#7a7a7a", fontSize: 13 }}>
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
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">
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
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">
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
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">
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
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">
                  Use Case / Challenge
                </label>
                <select
                  className={`${inputClass} appearance-none`}
                  style={{ ...inputStyle, color: "rgba(255,255,255,0.6)" }}
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
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-2">
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
                className="w-full py-3.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "#00a0e3", boxShadow: "0 0 20px rgba(0,160,227,0.25)" }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>

              <p style={{ color: "#505050", fontSize: 11, textAlign: "center" }}>
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

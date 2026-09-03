import { Mail, FileText, MapPin } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Lazy-loaded: Leaflet is real weight to add to every homepage visit for a
// map that sits below the fold. Deferring it means the initial homepage
// bundle doesn't pay for it until this component actually mounts.
const LeafletMap = lazy(() => import("@/components/LeafletMap"));

const inputClass =
  "w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder-foreground/30 border border-black/[0.1] focus:border-[#265B01] focus:ring-1 focus:ring-[#265B01]/25 focus:outline-none transition-all";
const inputStyle = { background: "#ffffff" };

/**
 * Form submission endpoint.
 *
 * Previously this form didn't send anywhere — it just showed a toast on a
 * timer. Set VITE_CONTACT_FORM_ENDPOINT in a .env file (or your host's env
 * vars) to a real endpoint and submissions will actually reach you. Easiest
 * zero-backend option: https://formspree.io — create a form, drop its
 * endpoint URL (https://formspree.io/f/xxxxxxxx) in as this variable, done.
 * Alternatively point it at a Flask/Django endpoint you control.
 */
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

const ContactSales = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    if (!FORM_ENDPOINT) {
      // No endpoint configured yet — don't pretend to send. Tell the
      // developer, not the visitor, since a silent no-op form is worse
      // than a visible error during setup.
      console.error(
        "Contact form has no VITE_CONTACT_FORM_ENDPOINT configured — submission was not sent anywhere. See the comment above FORM_ENDPOINT in ContactSales.tsx."
      );
      toast({
        title: "Form not yet connected",
        description: "This is a setup issue, not yours, the site owner needs to configure the form endpoint.",
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
      form.reset();
      navigate("/thank-you");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      toast({
        title: "Something went wrong",
        description: "Your message wasn't sent. Please email sales@giospatial.org directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
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
              style={{ background: "#ffffff" }}
            >
              <h3 className="font-black text-foreground mb-2 tracking-widest" style={{ fontSize: 15, letterSpacing: "0.06em" }}>
                GIOSPATIAL
              </h3>
              <div className="flex items-start gap-2 mb-5" style={{ color: "#5a5a5a", fontSize: 13 }}>
                <MapPin size={13} className="text-[#265B01] mt-0.5 shrink-0" />
                <span>Naivasha Road, Uthiru, Westlands, Nairobi<br />P.O. Box 21934-00100 GPO, Nairobi</span>
              </div>

              <a
                href="tel:+254708187019"
                className="block font-bold text-foreground hover:text-[#265B01] transition-colors mb-1"
                style={{ fontSize: 28, letterSpacing: "-0.02em" }}
              >
                +254 708 187 019
              </a>
              <p style={{ color: "#888", fontSize: 12, marginBottom: 16 }}>Business hours EAT, Mon-Fri</p>

              {/*
                Real interactive Leaflet map (OpenStreetMap tiles, no API
                key) — pannable/zoomable, not a static embed. Uses the same
                Uthiru coordinates verified against Wikipedia, so this pin
                is accurate to the neighbourhood.
              */}
              <div className="mb-3">
                <Suspense
                  fallback={
                    <div
                      className="rounded-lg border border-black/[0.08] animate-pulse"
                      style={{ height: 220, background: "rgba(0,0,0,0.03)" }}
                    />
                  }
                >
                  <LeafletMap />
                </Suspense>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Naivasha%20Road%2C%20Uthiru%2C%20Westlands%2C%20Nairobi%2C%20Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#265B01] font-semibold hover:underline"
                style={{ fontSize: 13 }}
              >
                <MapPin size={13} />
                Get Directions
              </a>
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
                    Fill the form: a solutions engineer responds in 24 hours.
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
                    name="name"
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
                    name="organisation"
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
                  name="email"
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
                  name="use_case"
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
                  name="message"
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

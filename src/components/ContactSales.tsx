import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { C } from "@/content/site";
import { useToast } from "@/hooks/use-toast";

/**
 * Contact form. Set VITE_CONTACT_FORM_ENDPOINT in .env (for example a
 * Formspree URL, https://formspree.io/f/xxxxxxxx) so submissions go somewhere.
 * Without it the form validates, then tells the visitor it was not sent and
 * points them at the email address, rather than showing a false success.
 */
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
const K = C.contact;

type Errors = { n?: boolean; e?: boolean; m?: boolean };

export const ContactInfo = () => (
  <div className="cinfo" data-reveal>
    <h3>GIOSPATIAL</h3>
    <ul>
      <li><Icon name="pin" /><span>{K.addr[0]}<br />{K.addr[1]}</span></li>
      <li><Icon name="phone" /><span><a href="tel:+254708187019">+254 708 187 019</a><small>{K.hours}</small></span></li>
      <li><Icon name="mail" /><span><a href="mailto:sales@giospatial.org">sales@giospatial.org</a><small>Email sales directly</small></span></li>
    </ul>
    <hr />
    <a className="lnk" style={{ color: "var(--lime)" }} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=Naivasha%20Road%2C%20Uthiru%2C%20Westlands%2C%20Nairobi%2C%20Kenya">
      Get Directions <Icon name="ext" />
    </a>
  </div>
);

const ContactSales = ({ standalone = false }: { standalone?: boolean }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const val = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {
      n: val("name").length < 2,
      e: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val("email")),
      m: val("message").length < 5,
    };
    setErrors(next);
    if (next.n || next.e || next.m) {
      (form.querySelector(".fld.bad input, .fld.bad textarea") as HTMLElement | null)?.focus();
      return;
    }
    if (!FORM_ENDPOINT) {
      console.warn("Contact form has no VITE_CONTACT_FORM_ENDPOINT configured, so the submission was not sent anywhere.");
      toast({ title: "Form not connected yet", description: "Please email sales@giospatial.org directly.", variant: "destructive" });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error(String(res.status));
      navigate("/thank-you");
    } catch {
      toast({ title: "Could not send your message", description: "Please try again or email sales@giospatial.org.", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="sec" id="contact" style={standalone ? { paddingTop: "clamp(40px,5vw,64px)" } : undefined}>
      <div className="wrap">
        {!standalone && <SectionHead title={K.h2} sub={K.p} center />}
        <div className="cgrid">
          <ContactInfo />
          <div className="form" data-reveal>
            <h3>Submit an enquiry</h3>
            <p style={{ marginTop: -8 }}>Fill the form: a solutions engineer responds in 24 hours.</p>
            <form onSubmit={submit} noValidate>
              <div className="fr">
                <div className={`fld${errors.n ? " bad" : ""}`}>
                  <label htmlFor="f-n">Name</label>
                  <input id="f-n" name="name" autoComplete="name" placeholder="Your name" required aria-invalid={!!errors.n} />
                  <div className="err">Enter your name.</div>
                </div>
                <div className="fld">
                  <label htmlFor="f-o">Organisation</label>
                  <input id="f-o" name="organisation" autoComplete="organization" placeholder="Your organisation" />
                </div>
              </div>
              <div className={`fld${errors.e ? " bad" : ""}`} style={{ marginTop: 18 }}>
                <label htmlFor="f-e">Email</label>
                <input id="f-e" name="email" type="email" autoComplete="email" placeholder="you@organisation.com" required aria-invalid={!!errors.e} />
                <div className="err">Enter a valid email address.</div>
              </div>
              <div className="fld" style={{ marginTop: 18 }}>
                <label htmlFor="f-d">Use Case / Challenge</label>
                <select id="f-d" name="domain" defaultValue=""><option value="">Select a domain</option>{K.domains.map((d) => <option key={d}>{d}</option>)}</select>
              </div>
              <div className={`fld${errors.m ? " bad" : ""}`} style={{ marginTop: 18 }}>
                <label htmlFor="f-m">Message</label>
                <textarea id="f-m" name="message" placeholder="Describe your project and goals..." required aria-invalid={!!errors.m} />
                <div className="err">Tell us a little about your project.</div>
              </div>
              <button className="btn btn-p" style={{ width: "100%", marginTop: 22 }} type="submit" disabled={busy}>
                {busy ? "Sending..." : <>Send enquiry <Icon name="arrow" /></>}
              </button>
              <p className="fnote" style={{ marginTop: 14 }}>{K.note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;

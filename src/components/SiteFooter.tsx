import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import { C } from "@/content/site";
import { toPath } from "@/lib/routes";
import { logoHorizontalWhite } from "@/assets/images";

const SiteFooter = () => {
  const [status, setStatus] = useState("");

  // The newsletter is not connected to a mailing service yet. Say so plainly
  // rather than pretending the address was saved.
  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Newsletter not yet connected. Email sales@giospatial.org in the meantime.");
    e.currentTarget.reset();
  };

  return (
    <footer className="foot">
      <Contour variant="B" />
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Link to="/" aria-label="GIOSPATIAL home"><img src={logoHorizontalWhite} alt="GIOSPATIAL" /></Link>
            <p style={{ marginTop: 18, maxWidth: 340, color: "#C7D2C8" }}>Intelligence in every location.</p>
            <div className="soc">
              {C.socials.map((s) => (
                <a key={s[2]} href={s[1]} aria-label={s[2]} target="_blank" rel="noopener noreferrer"><Icon name={s[0] === "x" ? "x2" : s[0]} /></a>
              ))}
            </div>
            <form className="nl" onSubmit={subscribe} noValidate>
              <label className="sr" htmlFor="nl-e">Email address</label>
              <input id="nl-e" name="email" type="email" placeholder="you@organisation.com" autoComplete="email" />
              <button className="btn btn-lime btn-sm" type="submit">Subscribe</button>
            </form>
            <div className="nl-s" role="status">{status}</div>
          </div>
          <div className="cols">
            {C.footCols.map((col) => (
              <div key={col[0]}>
                <h4>{col[0]}</h4>
                <ul>{col[1].map((l) => <li key={l[0]}><Link to={toPath(l[1])}>{l[0]}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="foot-b">
          <p>{C.legalLine}.<br />© {new Date().getFullYear()} Giospatial Earth Limited. All rights reserved.</p>
          <div className="lg">
            <Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/legal">Legal</Link><Link to="/press">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

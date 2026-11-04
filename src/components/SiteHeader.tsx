import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";
import { C } from "@/content/site";
import { INSIGHTS } from "@/data/insights";
import { toPath } from "@/lib/routes";
import { logoHorizontal } from "@/assets/images";

type NavLinkDef = readonly [string, string];
interface NavGroup { name: string; groups: { title: string; links: NavLinkDef[] }[]; feat?: readonly string[] }

/** Top-level nav. The Insights menu is generated from src/data/insights.ts. */
const buildNav = (): NavGroup[] =>
  C.nav.map((n): NavGroup => {
    if (n.name === "Insights") {
      return {
        name: n.name,
        groups: [{
          title: "Recent",
          links: [
            ...INSIGHTS.slice(0, 3).map((a): NavLinkDef => [a.navLabel ?? a.title, `insights-${a.slug}`]),
            ["All Insights", "insights"],
          ],
        }],
        feat: ["Latest", INSIGHTS[0].title, INSIGHTS[0].excerpt, `insights-${INSIGHTS[0].slug}`],
      };
    }
    return {
      name: n.name,
      groups: n.groups.map((g) => ({ title: g[0] as string, links: g[1] as unknown as NavLinkDef[] })),
      feat: n.feat as readonly string[],
    };
  });

const NAV = buildNav();

const SiteHeader = () => {
  const location = useLocation();
  const [open, setOpen] = useState<number | null>(null);
  const [sheet, setSheet] = useState(false);
  const timer = useRef<number>();
  const hdr = useRef<HTMLElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => { window.clearTimeout(timer.current); setOpen(null); setSheet(false); }, []);

  // Any navigation closes menus.
  useEffect(() => { close(); }, [location.key, close]);

  // Scroll lock + focus handling for the mobile sheet.
  useEffect(() => {
    document.body.classList.toggle("lock", sheet);
    if (sheet) closeBtn.current?.focus();
    return () => document.body.classList.remove("lock");
  }, [sheet]);

  // Escape closes; outside click closes the mega menu; leaving desktop width closes the sheet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (sheet) { setSheet(false); burger.current?.focus(); }
      if (open !== null) {
        const btn = hdr.current?.querySelector<HTMLButtonElement>(`[data-m="${open}"]`);
        setOpen(null);
        btn?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (open !== null && hdr.current && !hdr.current.contains(e.target as Node)) setOpen(null);
    };
    const onResize = () => { if (window.innerWidth >= 1024) setSheet(false); else setOpen(null); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open, sheet]);

  const hoverOpen = (i: number) => {
    if (window.innerWidth < 1024) return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(i), 90);
  };
  const hoverClose = () => {
    if (window.innerWidth < 1024) return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(null), 220);
  };

  const menu = open !== null ? NAV[open] : null;

  return (
    <>
      <div className="util">
        <div className="wrap">
          <div className="grp"><span>Nairobi, Kenya</span><span className="sep" /><span>Trading name of Giospatial Earth Limited</span></div>
          <div className="grp"><a href="mailto:sales@giospatial.org">sales@giospatial.org</a><a href="tel:+254708187019">+254 708 187 019</a></div>
        </div>
      </div>

      <header className="hdr" id="hdr" ref={hdr} onMouseLeave={hoverClose}>
        <div className="wrap">
          <Link className="logo" to="/" aria-label="GIOSPATIAL home"><img className="ld" src={logoHorizontal} alt="GIOSPATIAL" /></Link>
          <ul className="nav">
            {NAV.map((n, i) => (
              <li key={n.name}>
                <button
                  type="button"
                  data-m={i}
                  aria-expanded={open === i}
                  aria-controls="mega"
                  onClick={() => { window.clearTimeout(timer.current); setOpen(open === i ? null : i); }}
                  onMouseEnter={() => hoverOpen(i)}
                >
                  {n.name}<Icon name="chev" />
                </button>
              </li>
            ))}
          </ul>
          <div className="hdr-r">
            <Link to="/#contact" className="btn btn-p btn-demo">Request a Demo <Icon name="arrow" /></Link>
            <button ref={burger} className="burger" type="button" aria-label="Open menu" aria-expanded={sheet} aria-controls="sheet" onClick={() => setSheet(true)}><Icon name="menu" /></button>
          </div>
        </div>

        <div className={`mega${menu ? " open" : ""}`} id="mega" role="region" aria-label="Menu" onMouseEnter={() => window.clearTimeout(timer.current)}>
          {menu && (
            <div className="wrap">
              <div className="mega-in" style={{ ["--cols" as string]: menu.groups.length }}>
                {menu.groups.map((g) => (
                  <div key={g.title}>
                    <h4>{g.title}</h4>
                    <ul>{g.links.map((l) => <li key={l[0] + l[1]}><Link to={toPath(l[1])}>{l[0]}</Link></li>)}</ul>
                  </div>
                ))}
                {menu.feat && menu.feat.length > 0 && (
                  <div className="feat">
                    <small>{menu.feat[0]}</small>
                    <strong>{menu.feat[1]}</strong>
                    <p>{menu.feat[2]}</p>
                    <Link className="lnk" to={toPath(menu.feat[3])}>Learn more <Icon name="arrow" /></Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <div className={`sheet${sheet ? " open" : ""}`} id="sheet" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!sheet}>
        <div className="sheet-h">
          <Link className="logo" to="/" aria-label="GIOSPATIAL home"><img className="ld" src={logoHorizontal} alt="GIOSPATIAL" /></Link>
          <button ref={closeBtn} className="burger" type="button" aria-label="Close menu" onClick={() => setSheet(false)}><Icon name="x" /></button>
        </div>
        <div className="sheet-b">
          {NAV.map((n) => (
            <details key={n.name}>
              <summary>{n.name}<Icon name="chev" /></summary>
              {n.groups.map((g) => (
                <div key={g.title}>
                  <h4>{g.title}</h4>
                  <ul className="sl">{g.links.map((l) => <li key={l[0] + l[1]}><Link to={toPath(l[1])}>{l[0]}</Link></li>)}</ul>
                </div>
              ))}
            </details>
          ))}
        </div>
        <div className="sheet-f">
          <Link to="/#contact" className="btn btn-p">Request a Demo <Icon name="arrow" /></Link>
          <a className="btn btn-o" href="tel:+254708187019"><Icon name="phone" /> +254 708 187 019</a>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;

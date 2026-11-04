/**
 * Content files refer to links by short view names ("nbis", "services-ai-lab",
 * "home#technology", "contact"). This turns one into a real URL for <Link>.
 *
 *   home                -> /
 *   home#technology     -> /#technology
 *   contact             -> /#contact   (the contact form lives on the homepage)
 *   services            -> /services
 *   services-analytics  -> /divisions/analytics
 *   insights-<slug>     -> /insights/<slug>
 *   anything else       -> /<name>, with an optional #section
 */
export const toPath = (target: string): string => {
  const [view, section] = target.split("#");
  let base: string;
  let hash = section;
  if (view === "home") base = "/";
  else if (view === "contact") { base = "/"; hash = "contact"; }
  else if (view.startsWith("services-")) base = `/divisions/${view.slice("services-".length)}`;
  else if (view.startsWith("insights-")) base = `/insights/${view.slice("insights-".length)}`;
  else base = `/${view}`;
  return hash ? `${base}#${hash}` : base;
};

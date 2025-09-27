export interface NavLink {
  label: string;
  href: string;
  special?: boolean; // optional styling flag
}

export type Route = "/" | "/find" | "/list" | "/contact";

// Common links you’re reusing across pages
const baseLinks: NavLink[] = [
  { label: "Find", href: "/find" },
  { label: "List", href: "/list" },
  { label: "Login", href: "/login", special: true },
];

export const navConfig: Record<Route, NavLink[]> = {
  "/": baseLinks,
  "/find": baseLinks,
  "/list": baseLinks,
  "/contact": baseLinks,
};
 
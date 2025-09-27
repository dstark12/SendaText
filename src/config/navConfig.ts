export interface NavLink {
  label: string;
  href: string;
  special?: boolean; // optional styling flag
}

export type Route =
  | "/"
  | "/features"
  | "/pricing"
  | "/how-it-works"
  | "/about"
  | "/contact"
  | "/login"
  | "/signup";

// Common links for most pages
const baseLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login", special: true },
  { label: "Get Started", href: "/signup", special: true },
];

export const navConfig: Record<Route, NavLink[]> = {
  "/": baseLinks,
  "/features": baseLinks,
  "/pricing": baseLinks,
  "/how-it-works": baseLinks,
  "/about": baseLinks,
  "/contact": baseLinks,
  "/login": baseLinks,
  "/signup": baseLinks,
};

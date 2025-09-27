"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig, NavLink } from "@/config/navConfig";

export default function NavBar() {
  const pathname = usePathname();

  // fallback to "/" if current route isn’t in config
  const links: NavLink[] =
    navConfig[pathname as keyof typeof navConfig] || navConfig["/"];

  return (
    <div className="topNav flex justify-between items-center bg-messageline-blue shadow-md sticky top-0 z-50 text-white">
      {/* Logo / Brand */}
      <div className="text-lg font-semibold p-4">
        <Link href="/">MessageLine</Link>
      </div>

      {/* Links */}
      <div className="space-x-4 flex items-center p-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return link.special ? (
            <Link
              key={link.href}
              href={link.href}
              className="bg-messageline-green hover:bg-messageline-orange px-4 py-2 rounded font-semibold"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive ? "underline font-bold" : ""
              } hover:underline`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

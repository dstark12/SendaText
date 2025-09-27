"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig, NavLink } from "@/config/navConfig";



export default function NavBar(){
    const pathname = usePathname();

    // fallback to "/" if current route isn’t in config
    const links: NavLink[] = navConfig[pathname as keyof typeof navConfig] || navConfig["/"];

    return (

        <div className="topNav flex justify-between items-center bg-gray-800">
            <div className="text-lg font-semibold text-white p-4">
                <Link href="/">CommonGround</Link>
            </div>

            <div className="space-x-4 flex items-center text-white p-4">
                {links.map((link) =>
                    link.special ? (
                        <div
                        key={link.href}
                        >
                            <Link className="bg-gray-300 w-20.5 h-10 flex items-center justify-center rounded text-black" href={link.href}>
                                {link.label}
                            </Link>
                        </div>
                    ) : (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
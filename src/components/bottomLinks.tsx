"use client";
import Link from "next/link";

export default function BottomLinks() {
  return (
    <div className="w-auto h-auto bg-messageline-blue text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 text-center">
        
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/how-it-works">How It Works</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <Link href="/login">Login</Link>
          <Link href="/signup">Get Started</Link>
        </div>

      </div>
    </div>
  );
}

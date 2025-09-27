import React from "react";

import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";
import GetStarted from "@/components/getStarted";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="flex flex-col md:flex-row justify-between px-12 py-12 bg-messageline-blue-light">
        {/* Left side - Hero text */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Reach your customers instantly with text.
          </h1>
          <p className="text-xl font-bold italic text-gray-700">
            Send reminders, specials, and updates — all by text, no tech skills required.
          </p>
        </div>

        {/* Right side - Get Started form */}
        <div className="mt-8 md:mt-0 md:ml-12 w-full max-w-sm">
          <GetStarted />
        </div>
      </div>


      <BottomLinks />
    </div>
  );
}

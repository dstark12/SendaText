import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero */}
      <div className="bg-messageline-blue text-white text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-4">About MessageLine</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We built MessageLine to make customer communication simple, fast, and
          accessible for every small business.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-messageline-blue-light py-16 px-6 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-messageline-blue mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Running a business is hard enough. We believe staying connected
            with your customers shouldn’t be. That’s why we created MessageLine:
            to give local businesses the power of instant communication without
            the complexity of enterprise tools.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-messageline-blue mb-4 text-center">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            MessageLine started with a simple idea: many businesses lose touch
            with their customers because email is ignored and phone calls go
            unanswered. Texting is direct, familiar, and effective — but the
            tools out there were too expensive or too complicated.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6 text-center">
            We set out to fix that by building a platform designed specifically
            for small businesses. Whether you run a café, salon, shop, or local
            service, MessageLine helps you keep your community engaged with
            quick, simple text updates.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-messageline-blue-light py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-messageline-blue mb-3">Simplicity</h3>
            <p className="text-gray-600">
              Tools anyone can use — no tech background required.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-messageline-blue mb-3">Trust</h3>
            <p className="text-gray-600">
              Built with compliance and customer respect at the core.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-messageline-blue mb-3">Support</h3>
            <p className="text-gray-600">
              Dedicated help for small businesses every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-messageline-blue mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-6">
          Join MessageLine today and make texting your easiest business tool.
        </p>
        <a
          href="/signup"
          className="inline-block bg-messageline-green hover:bg-messageline-orange text-white font-semibold px-6 py-3 rounded"
        >
          Get Started
        </a>
      </div>

      <BottomLinks />
    </div>
  );
}

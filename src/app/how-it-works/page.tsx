import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero */}
      <div className="bg-messageline-blue text-white text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-4">How MessageLine Works</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Sending customer updates has never been easier. With MessageLine,
          you’ll be up and running in minutes — no tech skills required.
        </p>
      </div>

      {/* Steps */}
      <div className="bg-messageline-blue-light flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl font-bold text-messageline-green mb-4">1</div>
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Sign Up</h2>
            <p className="text-gray-600">
              Create your MessageLine account in just a few clicks. Choose your plan and get your dedicated business number.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl font-bold text-messageline-green mb-4">2</div>
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Add Customers</h2>
            <p className="text-gray-600">
              Upload your contact list or let customers opt in with a simple text. All fully compliant with texting rules.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl font-bold text-messageline-green mb-4">3</div>
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Send Texts</h2>
            <p className="text-gray-600">
              Type your message, hit send, and instantly reach your entire customer base. Fast, simple, and effective.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-messageline-blue mb-4">
          Start Connecting Today
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up now and try MessageLine risk-free. Your customers will thank you.
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

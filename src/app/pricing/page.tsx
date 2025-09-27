import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div className="bg-messageline-blue text-white text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg">
          Start with the plan that works best for your business. No contracts, cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-6 bg-messageline-blue-light">
        
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-messageline-blue mb-2">Starter</h2>
          <p className="text-gray-600 mb-6">Perfect for new businesses</p>
          <p className="text-4xl font-extrabold mb-6">$19<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li>✔ 500 messages per month</li>
            <li>✔ 1 business number</li>
            <li>✔ Basic support</li>
          </ul>
          <button className="w-full bg-messageline-green hover:bg-messageline-orange text-white py-3 rounded font-semibold">
            Choose Starter
          </button>
        </div>

        {/* Growth Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm border-4 border-messageline-green">
          <h2 className="text-2xl font-bold text-messageline-blue mb-2">Growth</h2>
          <p className="text-gray-600 mb-6">For growing small businesses</p>
          <p className="text-4xl font-extrabold mb-6">$49<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li>✔ 2,500 messages per month</li>
            <li>✔ Up to 3 business numbers</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="w-full bg-messageline-green hover:bg-messageline-orange text-white py-3 rounded font-semibold">
            Choose Growth
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-messageline-blue mb-2">Pro</h2>
          <p className="text-gray-600 mb-6">For established businesses</p>
          <p className="text-4xl font-extrabold mb-6">$99<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li>✔ 10,000 messages per month</li>
            <li>✔ Unlimited business numbers</li>
            <li>✔ Dedicated support</li>
          </ul>
          <button className="w-full bg-messageline-green hover:bg-messageline-orange text-white py-3 rounded font-semibold">
            Choose Pro
          </button>
        </div>
      </div>

      <BottomLinks />
    </div>
  );
}

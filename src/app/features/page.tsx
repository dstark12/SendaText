import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div className="bg-messageline-blue text-white text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Features Built for Small Business</h1>
        <p className="text-lg max-w-2xl mx-auto">
          MessageLine makes it easy to reach your customers quickly and reliably. 
          No complicated tools — just simple, effective texting.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex-1 bg-messageline-blue-light py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Broadcast Messages</h2>
            <p className="text-gray-600">
              Send announcements, specials, and updates to all your customers in seconds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Personalized Texting</h2>
            <p className="text-gray-600">
              Greet your customers by name and make every message feel personal and direct.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Opt-In & Compliance</h2>
            <p className="text-gray-600">
              Stay compliant with carrier rules. Customers can easily opt in and opt out anytime.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Two-Way Messaging</h2>
            <p className="text-gray-600">
              Let customers reply back with questions, confirmations, or feedback.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Multiple Numbers</h2>
            <p className="text-gray-600">
              Manage one or more business numbers under a single account, all from one dashboard.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-messageline-blue mb-3">Simple Dashboard</h2>
            <p className="text-gray-600">
              Easy-to-use interface that anyone can learn in minutes — no tech skills required.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-messageline-blue mb-4">
          Ready to Reach Your Customers?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with MessageLine today and keep your customers informed and engaged.
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

"use client";

export default function GetStarted() {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="rounded-2xl p-8 border border-gray-300 w-full max-w-md bg-gray-100 shadow-lg">
        <h1 className="text-2xl font-bold text-messageline-blue mb-2">
          Get Started
        </h1>
        <p className="mb-6 text-gray-700">
          Enter your details to start connecting with your customers today.
        </p>

        {/* First Name */}
        <label className="block text-left mb-1 font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          className="rounded w-full border-2 border-gray-300 mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
          placeholder="First Name"
        />

        {/* Last Name */}
        <label className="block text-left mb-1 font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          className="rounded w-full border-2 border-gray-300 mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
          placeholder="Last Name"
        />

        {/* Email */}
        <label className="block text-left mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="rounded w-full border-2 border-gray-300 mb-6 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
          placeholder="Your Email"
        />

        {/* CTA Button */}
        <button className="bg-messageline-green hover:bg-messageline-orange text-white font-semibold px-6 py-3 rounded w-full">
          Get Started
        </button>
      </div>
    </div>
  );
}

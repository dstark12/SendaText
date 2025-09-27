import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Centered signup card */}
      <div className="p-4 flex flex-1 justify-center items-center bg-messageline-blue-light px-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
          <h1 className="text-3xl font-extrabold text-messageline-blue mb-2 text-center">
            Create Account
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Join messageline and start reaching your customers instantly
          </p>

          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-left text-gray-700 font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-left text-gray-700 font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-left text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-messageline-green hover:bg-messageline-orange text-white font-semibold py-3 rounded transition"
            >
              Sign Up
            </button>
          </form>

          {/* Already have account */}
          <div className="flex justify-center items-center gap-2 mt-6 text-gray-700">
            <p>Already have an account?</p>
            <a href="/login" className="font-bold text-messageline-blue hover:underline">
              Log In
            </a>
          </div>
        </div>
      </div>

      <BottomLinks />
    </div>
  );
}

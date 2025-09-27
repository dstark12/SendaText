import React from "react";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Centered login card */}
      <div className="flex flex-1 justify-center items-center bg-messageline-blue-light px-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
          <h1 className="text-3xl font-extrabold text-messageline-blue mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Log in to your account
          </p>

          <form className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-left text-gray-700 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-messageline-blue"
                placeholder="Enter your username"
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
              <p className="text-sm text-messageline-blue hover:underline mt-2 cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-messageline-green hover:bg-messageline-orange text-white font-semibold py-3 rounded transition"
            >
              Log In
            </button>
          </form>

          {/* Signup Redirect */}
          <div className="flex justify-center items-center gap-2 mt-6 text-gray-700">
            <p>Don’t have an account?</p>
            <a href="/signup" className="font-bold text-messageline-blue hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <BottomLinks />
    </div>
  );
}

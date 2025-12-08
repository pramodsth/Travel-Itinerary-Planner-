import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/itinerary");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">

      {/* Background */}
      <img
        src="/home.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Glass Login Card */}
      <div className="relative z-10 w-[90%] max-w-3xl bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-6">

        {/* Left section */}
        <div className="flex-1">
          
          {/* Centered Heading */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Start Your<br />Perfect Trip</h2>
            <h3 className="font-medium text-lg mt-2">Login</h3>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-5 bg-white/80 rounded-xl border border-gray-300 focus:outline-none"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-white text-gray-800 rounded-xl border border-gray-400 hover:bg-gray-100 transition"
          >
            Login
          </button>

          {/* Black Straight Line */}
           <div className="w-full border-b border-black border-[3.5px] my-4"></div>

          {/* Register text */}
          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Right preview image */}
        <div className="hidden md:flex flex-1 rounded-2xl overflow-hidden">
          <img
            src="/home.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

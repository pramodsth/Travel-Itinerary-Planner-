import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/itinerary");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background */}
      <img
        src="/home.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Glass Register Card */}
      <div className="relative z-10 w-[90%] max-w-3xl bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Your <span className="text-teal-400">Perfect Trip</span>
            </h2>
            <h3 className="font-medium text-lg text-gray-100 mt-2">Register</h3>
          </div>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 mb-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 mb-3 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-5 bg-white/80 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:from-teal-600 hover:to-cyan-600 transition transform hover:-translate-y-0.5"
          >
            Register
          </button>

          {/* Divider */}
          <div className="w-full border-b border-white/40 my-5"></div>

          {/* Login Redirect */}
          <p className="text-sm mt-2 text-center text-white/90">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-300 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Preview Image */}
        <div className="hidden md:flex flex-1 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/home.jpg"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

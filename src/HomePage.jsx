import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  const handleStart = () => {
    navigate("/login");
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full relative" ref={topRef}>
      {/* HERO SECTION */}
      <div className="w-full h-screen relative">
        {/* Background Image */}
        <img
          src="/home.jpg"
          alt="Travel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.avif"
                alt="Logo"
                className="w-11 h-11 rounded-full border-2 border-teal-400 shadow-lg"
              />
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Travel Itinerary Planner
              </h1>
            </Link>

            {/* Nav Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-white/90 hover:text-teal-300 transition font-medium"
              >
                Home
              </button>

              <button
                onClick={scrollToAbout}
                className="text-white/90 hover:text-teal-300 transition font-medium"
              >
                About
              </button>

              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-gray-900 font-semibold shadow-lg hover:scale-105 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Plan Trips. <span className="text-teal-400">Create Memories.</span>
          </h2>

          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl">
            Plan your trips your way, stay organized throughout your journey, and travel smarter every time.
          </p>

          <button
            onClick={handleStart}
            className="px-16 py-3 rounded-full bg-white text-gray-900 font-semibold text-lg shadow-xl hover:bg-teal-400 hover:text-white transition-all"
          >
            Start Planning
          </button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        className="w-full bg-gradient-to-b from-gray-100 to-white px-6 py-24"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-teal-500">Travel Itinerary Planner?</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
            Travel Itinerary Planner is built to simplify your travel experience.
            From organizing daily activities to managing destinations, everything
            is designed to help you travel smarter and stress-free.
            Plan personalized trips, track expenses, and share your itineraries
            with friends and family.
          </p>

          {/* About Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🗺️",
                title: "Smart Itineraries",
                desc: "Create day-wise plans, add activities, and manage your entire trip.",
                gradient: "from-teal-400 to-cyan-400",
              },
              {
                icon: "⏱️",
                title: "Save Time",
                desc: "Plan everything in advance with an intuitive interface.",
                gradient: "from-orange-400 to-rose-400",
              },
              {
                icon: "🌍",
                title: "Travel Confidently",
                desc: "Access all your travel details anytime, anywhere, even offline.",
                gradient: "from-purple-400 to-indigo-400",
              },
              {
                icon: "💡",
                title: "Personalized Tips",
                desc: "Receive recommendations tailored to your preferences and interests.",
                gradient: "from-green-400 to-lime-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center text-2xl rounded-full mb-4 bg-gradient-to-r ${card.gradient} text-white shadow-lg mx-auto transition transform hover:scale-110`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

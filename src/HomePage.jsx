import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <img
        src="/home.jpg" 
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

     <nav className="fixed top-0 left-0 w-full z-50">
       <div className="max-w-15xl mx-auto px-6 py-4 flex items-center justify-between
                       bg-white/10 backdrop-blur-lg rounded-b-3xl shadow-lg border border-white/20">
     
         {/* Logo + Title */}
         <div className="flex items-center gap-4">
           <Link to="/" className="flex items-center gap-3">
             <img
               src="/logo.avif"
               alt="Logo"
               className="w-12 h-12 rounded-full border-2 border-white shadow-md"
             />
             <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
               Travel Itinerary Planner
             </h1>
           </Link>
         </div>
     
         {/* Nav Buttons */}
                         <div className="flex items-center gap-4 text-white">
     
                           <Link
                             to="/"
                             className="px-4 py-2 rounded-xl border border-white/50 hover:bg-white hover:text-gray-900
                                       transition-all shadow-md backdrop-blur-sm"
                           >
                             Home
                           </Link>
     
                           <Link
                             to="/register"
                             className="px-4 py-2 rounded-xl border border-white/50 hover:bg-white hover:text-gray-900
                                       transition-all shadow-md backdrop-blur-sm"
                           >
                             Register
                           </Link>
     
                           
     
                         </div>
                       </div>
                     </nav>

      {/* Hero Text */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Ready for your next Adventure?
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          Plan your trip · Travel like a pro
        </p>

        {/* Start Button */}
        <button 
          onClick={handleStart}
          className="px-20 py-2 bg-white text-gray-800 rounded-full shadow-md text-lg font-medium hover:bg-gray-200 transition"
        >
          Start
        </button>
      </div>
    </div>
  );
}

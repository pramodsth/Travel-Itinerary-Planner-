import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    fullName: "Pramod Shrestha",
    email: "pramod@gmail.com",
    phone: "+977 98XXXXXXXX",
    location: "Kathmandu, Nepal",
    bio: "Passionate traveler who loves planning smooth and meaningful journeys.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen relative bg-gray-100">
      {/* Background */}
      <img
        src="/home.jpg"
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.avif"
              alt="Logo"
              className="w-11 h-11 rounded-full border-2 border-teal-400 shadow-lg"
            />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Travel Itinerary Planner
            </h1>
          </Link>

          <div className="flex items-center gap-4 text-white">
            <Link className="hover:text-teal-300 transition" to="/itinerary">
              Home
            </Link>
            <Link className="hover:text-teal-300 transition" to="/profile">
              Profile
            </Link>
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="relative z-10 flex justify-center items-start pt-28 px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition">

          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-center text-white">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-xl mb-3"
            />
            <h1 className="text-xl font-bold">{user.fullName}</h1>
            <p className="text-sm opacity-90">
              Travel Itinerary Planner User
            </p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <InfoRow label="Full Name" name="fullName" value={user.fullName} editMode={editMode} handleChange={handleChange} />
            <InfoRow label="Email Address" name="email" value={user.email} editMode={editMode} handleChange={handleChange} />
            <InfoRow label="Phone Number" name="phone" value={user.phone} editMode={editMode} handleChange={handleChange} />
            <InfoRow label="Location" name="location" value={user.location} editMode={editMode} handleChange={handleChange} />
            <InfoRow label="Bio" name="bio" value={user.bio} multi editMode={editMode} handleChange={handleChange} />

            <button
              onClick={() => setEditMode(!editMode)}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-teal-600 hover:to-cyan-600 transition transform hover:-translate-y-0.5"
            >
              {editMode ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Info Row */
function InfoRow({ label, value, name, multi, editMode, handleChange }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </p>
      {editMode ? (
        multi ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />
        ) : (
          <input
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />
        )
      ) : (
        <p className="text-gray-800">{value}</p>
      )}
    </div>
  );
}

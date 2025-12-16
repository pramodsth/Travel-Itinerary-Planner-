import React, { useState } from "react";

export default function SearchDestinations({ onClose, onAddActivity }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const destinations = ["Kathmandu", "Pokhara", "Lumbini", "Chitwan"];

  const handleAdd = () => {
    if (selected) {
      onAddActivity({
        title: selected,
        description: "Description here",
        time: "00:00",
        location: selected,
      });
      onClose();
    }
  };

  // Google Maps iframe URL
  const mapQuery = search || "World";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    mapQuery
  )}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl w-[90%] max-w-3xl p-6 relative flex flex-col gap-4 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition text-2xl"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text mb-3">
          Search Destinations
        </h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search a place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/80 placeholder-gray-700 transition"
        />

        {/* Destination List */}
        <ul className="max-h-40 overflow-y-auto mb-2">
          {destinations
            .filter((d) => d.toLowerCase().includes(search.toLowerCase()))
            .map((place, i) => (
              <li
                key={i}
                onClick={() => setSelected(place)}
                className={`p-2 rounded-2xl cursor-pointer transition ${
                  selected === place
                    ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                {place}
              </li>
            ))}
        </ul>

        {/* Map */}
        <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <iframe
            title="Map"
            src={mapUrl}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="w-full py-3 mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:from-teal-600 hover:to-cyan-600 transition transform hover:-translate-y-0.5"
        >
          Add Activity
        </button>
      </div>
    </div>
  );
}

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

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Search Destinations</h2>

        <input
          type="text"
          placeholder="Search a place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ul className="max-h-40 overflow-y-auto mb-4">
          {destinations
            .filter((d) => d.toLowerCase().includes(search.toLowerCase()))
            .map((place, i) => (
              <li
                key={i}
                onClick={() => setSelected(place)}
                className={`p-2 rounded-md cursor-pointer ${
                  selected === place ? "bg-blue-200" : "hover:bg-gray-100"
                }`}
              >
                {place}
              </li>
            ))}
        </ul>

        <button
          onClick={handleAdd}
          className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Add Activity
        </button>
      </div>
    </div>
  );
}

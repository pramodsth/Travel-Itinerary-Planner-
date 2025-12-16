import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function AddNewActivityModal({ isOpen, onClose, onAddActivity }) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = { title, time, location, note, category };
    onAddActivity(newActivity);

    // Reset form
    setTitle(""); setTime(""); setLocation(""); setNote(""); setCategory("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl w-[90%] max-w-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-200 hover:text-white transition"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-5 text-center text-white">
          Add New Activity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Activity Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/80 placeholder-gray-700 transition"
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/80 transition"
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/80 transition"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/80 transition"
          >
            <option value="">Select Category</option>
            <option value="hotel">Hotel</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="activity">Activity</option>
            <option value="shopping">Shopping</option>
          </select>

          <textarea
            placeholder="Notes (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/80 transition"
            rows={3}
          ></textarea>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2 bg-gray-800 text-white rounded-2xl shadow-md hover:bg-gray-900 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl shadow-lg hover:from-teal-600 hover:to-cyan-600 transition transform hover:-translate-y-0.5"
            >
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

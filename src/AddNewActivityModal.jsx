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

    const newActivity = {
      title,
      time,
      location,
      note,
      category,
    };

    onAddActivity(newActivity);

    // Reset form
    setTitle("");
    setTime("");
    setLocation("");
    setNote("");
    setCategory("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <FiX size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Add New Activity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Activity Title */}
          <input
            type="text"
            placeholder="Activity Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-blue-500"
            required
          />

          {/* Time */}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-blue-500"
            required
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-blue-500"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-blue-500"
          >
            <option value="">Select category</option>
            <option value="hotel">Hotel</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="activity">Activity</option>
            <option value="shopping">Shopping</option>
          </select>

          {/* Notes */}
          <textarea
            placeholder="Notes (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-blue-500"
            rows={3}
          ></textarea>

          {/* Buttons Row */}
<div className="flex gap-3 mt-4">

  {/* Cancel Button */}
  <button
    type="button"
    onClick={onClose}
    className="w-1/2 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
  >
    Cancel
  </button>

  {/* sumit Button */}
  <button
    type="button"   // <-- important!
    onClick={onClose} // Use your close handler
    className="w-1/2 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
  >
    Add Activity
  </button>

</div>

        </form>
      </div>
    </div>
  );
}

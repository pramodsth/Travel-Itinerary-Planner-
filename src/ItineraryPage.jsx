import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2, FiShare2, FiDownload, FiPlus } from "react-icons/fi";
import AddNewActivityModal from "./AddNewActivityModal";

export default function ItineraryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Days State
  const [days, setDays] = useState([
    {
      dayNumber: 1,
      date: "Saturday, November 15, 2025",
      activities: []
    }
  ]);

  // Editing Day Title
  const [editingDay, setEditingDay] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  // Add Day
  const handleAddDay = () => {
    const newDayNumber = days.length + 1;
    const newDay = {
      dayNumber: newDayNumber,
      date: `Day ${newDayNumber} date not set`,
      activities: []
    };
    setDays([...days, newDay]);
  };

  // Delete Day
  const handleDeleteDay = (dayNumber) => {
    const updated = days
      .filter((day) => day.dayNumber !== dayNumber)
      .map((day, index) => ({
        ...day,
        dayNumber: index + 1,
      }));

    setDays(updated);
  };

  // Save Edited Title
  const handleSaveDayTitle = () => {
    const updated = days.map((d) =>
      d.dayNumber === editingDay ? { ...d, date: editedTitle } : d
    );

    setDays(updated);
    setEditingDay(null);
    setEditedTitle("");
  };

  // Add Activity Handler
  const handleAddActivity = (activity) => {
    console.log("New activity added:", activity);
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100">

      {/* Background */}
      <img
        src="/home.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto py-10 px-4">

        {/* Navbar */}
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

            {/* Buttons */}
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
                Hello User
              </Link>

              <Link
                to="/"
                className="px-4 py-2 rounded-xl border border-red-300 hover:bg-red-500 hover:text-white
                  hover:border-red-500 transition-all shadow-md backdrop-blur-sm"
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>

        {/* Summary Bar */}
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg flex justify-between items-center mb-8 mt-24">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Nepal</h2>
            <p className="text-sm md:text-base text-gray-700">{days.length} days</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-md hover:bg-gray-100 transition">
              <FiShare2 /> Share
            </button>
            <button className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-md hover:bg-gray-100 transition">
              <FiDownload /> Export
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-xl flex items-center gap-2 shadow-md hover:bg-green-700 transition"
            >
              <FiPlus /> Add Activities
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Days List */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {days.map((day) => (
              <div
                key={day.dayNumber}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                {/* Day Header */}
                <div className="flex justify-between items-center mb-3">

                  {/* Day Title */}
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {editingDay === day.dayNumber ? (
                      <input
                        className="border px-2 py-1 rounded-md"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus
                      />
                    ) : (
                      `Day ${day.dayNumber}`
                    )}
                  </h3>

                  {/* Actions */}
                  <div className="flex gap-3 items-center">
                    {/* Edit */}
                    {editingDay !== day.dayNumber ? (
                      <button
                        onClick={() => {
                          setEditingDay(day.dayNumber);
                          setEditedTitle(day.date);
                        }}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        onClick={handleSaveDayTitle}
                        className="text-green-600 hover:underline text-sm"
                      >
                        Save
                      </button>
                    )}

                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteDay(day.dayNumber)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>

                    {/* Add New Day */}
                    <button
                      onClick={handleAddDay}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      + Add day
                    </button>
                  </div>
                </div>

                {/* Date */}
                <p className="text-gray-700 font-medium mb-6">
                  {day.date}
                </p>

                {/* Activity List */}
                <div className="space-y-4">
                  {day.activities.length === 0 ? (
                    <p className="text-gray-500 text-sm">No activities added yet.</p>
                  ) : (
                    day.activities.map((act, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-4 shadow-md flex justify-between items-start hover:shadow-lg transition"
                      >
                        <div>
                          <p className="font-semibold text-gray-800">{act.title}</p>

                          <p className="text-sm text-gray-600">
                            {act.description} <br />
                            <span className="font-medium">{act.time}</span>
                          </p>

                          <p className="text-sm text-gray-700 mt-1">
                            {act.location}
                          </p>
                        </div>

                        <button className="text-gray-600 hover:text-black transition">
                          <FiEdit2 size={18} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Add Activity Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 py-2 bg-blue-600 text-white rounded-2xl border border-blue-600 hover:bg-blue-700 transition font-medium"
                >
                  + Add Activity
                </button>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Map View</h3>

            <div className="rounded-2xl overflow-hidden mb-5">
              <img
                src="/map.jpg"
                alt="Map"
                className="w-full h-56 object-cover"
              />
            </div>

            <h4 className="font-medium text-gray-800 mb-2">Locations</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Location 1</li>
              <li>Location 2</li>
            </ul>
          </div>
        </div>

        {/* Modal */}
        <AddNewActivityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddActivity={handleAddActivity}
        />
      </div>
    </div>
  );
}

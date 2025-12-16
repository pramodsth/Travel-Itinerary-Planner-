import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2, FiShare2, FiDownload, FiPlus } from "react-icons/fi";
import AddNewActivityModal from "./AddNewActivityModal";
import SearchDestinations from "./SearchDestinations";

export default function ItineraryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [days, setDays] = useState([
    {
      dayNumber: 1,
      date: "Saturday, November 15, 2025",
      activities: [],
    },
  ]);

  const [editingDay, setEditingDay] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleAddDay = () => {
    const newDayNumber = days.length + 1;
    setDays([
      ...days,
      {
        dayNumber: newDayNumber,
        date: `Day ${newDayNumber} date not set`,
        activities: [],
      },
    ]);
  };

  const handleDeleteDay = (dayNumber) => {
    const updated = days
      .filter((day) => day.dayNumber !== dayNumber)
      .map((day, index) => ({
        ...day,
        dayNumber: index + 1,
      }));
    setDays(updated);
  };

  const handleSaveDayTitle = () => {
    setDays((prev) =>
      prev.map((d) =>
        d.dayNumber === editingDay ? { ...d, date: editedTitle } : d
      )
    );
    setEditingDay(null);
    setEditedTitle("");
  };

  const handleAddActivity = (activity) => {
    setDays((prev) =>
      prev.map((day) =>
        day.dayNumber === 1
          ? { ...day, activities: [...day.activities, activity] }
          : day
      )
    );
    setIsModalOpen(false);
  };

  const handleAddActivityFromSearch = (activity) => {
    setDays((prev) =>
      prev.map((day) =>
        day.dayNumber === 1
          ? { ...day, activities: [...day.activities, activity] }
          : day
      )
    );
    setIsSearchOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Background */}
      <img
        src="/home.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-10 px-4">

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
                Hello User
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

        {/* Summary Bar */}
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex justify-between items-center mb-8 mt-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nepal</h2>
            <p className="text-gray-600">{days.length} days itinerary</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-100 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition">
              <FiShare2 /> Share
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition">
              <FiDownload /> Export
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
            >
              <FiPlus /> Add Activities
            </button>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Days */}
          <div className="lg:col-span-2 space-y-6">
            {days.map((day) => (
              <div
                key={day.dayNumber}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Day {day.dayNumber}
                  </h3>

                  <div className="flex gap-4 text-sm">
                    {editingDay !== day.dayNumber ? (
                      <button
                        onClick={() => {
                          setEditingDay(day.dayNumber);
                          setEditedTitle(day.date);
                        }}
                        className="text-teal-600 hover:underline"
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        onClick={handleSaveDayTitle}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                    )}

                    <button
                      onClick={() => handleDeleteDay(day.dayNumber)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>

                    <button
                      onClick={handleAddDay}
                      className="text-blue-600 hover:underline"
                    >
                      + Add day
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{day.date}</p>

                <div className="space-y-4">
                  {day.activities.length === 0 ? (
                    <p className="text-gray-400">No activities added yet.</p>
                  ) : (
                    day.activities.map((act, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-2xl p-4 shadow flex justify-between hover:shadow-md transition"
                      >
                        <div>
                          <p className="font-semibold text-gray-800">
                            {act.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {act.description}
                          </p>
                          <p className="text-sm text-gray-700 font-medium">
                            {act.time} · {act.location}
                          </p>
                        </div>
                        <FiEdit2 className="text-gray-500 hover:text-teal-600 cursor-pointer" />
                      </div>
                    ))
                  )}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:scale-[1.01] transition"
                >
                  + Add Activity
                </button>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Map View</h3>
            <img
              src="/map.jpg"
              alt="Map"
              className="rounded-2xl mb-4 h-56 w-full object-cover"
            />
            <ul className="text-gray-700 text-sm space-y-1">
              <li>📍 Location 1</li>
              <li>📍 Location 2</li>
            </ul>
          </div>
        </div>

        {/* Modals */}
        <AddNewActivityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddActivity={handleAddActivity}
        />

        {isSearchOpen && (
          <SearchDestinations
            onClose={() => setIsSearchOpen(false)}
            onAddActivity={handleAddActivityFromSearch}
          />
        )}
      </div>
    </div>
  );
}

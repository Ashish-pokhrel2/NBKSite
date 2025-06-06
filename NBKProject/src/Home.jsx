import React from "react";
import nbkLogo from "./imgs/WhatsApp Image 2025-06-03 at 1.58.42 PM.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <div className="flex items-center space-x-4">
          <img src={nbkLogo} alt="NBK Logo" className="w-16 h-16" />
          <div className="font-bold text-lg">NBK Polytechnic Institute</div>
        </div>
        <div className="text-white font-semibold text-center text-lg md:text-xl flex-1">
          आत्मनिर्भरताको लागि प्राविधिक शिक्षा
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-md w-48 text-center bg-white text-black font-semibold"
          />
          <button
            id="search-button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </header>

      {/* Navbar */}
  <nav className="bg-red-600 text-white text-sm font-bold flex justify-center space-x-6 py-2">
  {["Home", "Courses", "Department", "About us", "Gallery", "Notification", "Contact"].map(
    (item) => (
      <a
        href={`#${item.toLowerCase().replace(" ", "-")}`}
        key={item}
        className="hover:bg-red-700 hover:text-yellow-300 px-3 py-1 rounded transition duration-200"
      >
        {item}
      </a>
    )
  )}
</nav>


      {/* Main Content */}
      <main className="flex-1 bg-white p-4">
        {/* You can add main content here */}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg mb-4 border-b border-white pb-2">Contact Us</h2>
          <p className="mb-2">📞 Phone: 98XXXXXXXX, 98XXXXXXXX</p>
          <p className="mb-2">📧 Email: nbkpi@edu.np</p>
          <p>📬 Alt: pi.college@gmail.com</p>
        </div>

        {/* CTEVT + Social */}
        <div className="text-center flex flex-col items-center">
          <img
            src="/path-to-ctevt-logo.png"
            alt="CTEVT Logo"
            className="w-20 h-20 mb-3 rounded shadow-lg object-contain bg-white p-1"
          />
          <p className="font-semibold mb-2">Affiliated with CTEVT</p>
          <p className="font-semibold mb-2">Follow us on</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400 transition">📘</a>
            <a href="#" className="hover:text-yellow-400 transition">📞</a>
            <a href="#" className="hover:text-yellow-400 transition">📧</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start md:items-end">
          <h2 className="font-bold text-lg mb-4 border-b border-white pb-2 w-full text-left md:text-right">Quick Links</h2>
          {["Home", "Courses", "Department", "About us", "Gallery", "Notification", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:underline mb-1"
              >
                {item}
              </a>
            )
          )}
          <div className="mt-6 text-2xl font-extrabold text-yellow-300 transform rotate-12">
            POLICY
          </div>
        </div>
      </footer>
    </div>
  );
}

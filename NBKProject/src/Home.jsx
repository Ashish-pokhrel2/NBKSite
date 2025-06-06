import React from "react";
import nbkLogo from "./imgs/WhatsApp Image 2025-06-03 at 1.58.42 PM.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src={nbkLogo} alt="NBK Logo" className="w-16 h-16" />
          <div className="font-bold text-lg">NBK Polytechnic Institute</div>
        </div>
        <div className="text-center w-full text-white font-semibold text-xl">
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
        {['Home', 'Courses', 'Department', 'About us', 'gallery', 'Notification', 'Contact'].map((item) => (
          <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>
            {item}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-white"></main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Inquiries */}
        <div>
          <h2 className="font-bold text-lg">For inquiries:</h2>
          <p>Phone number: 98********, 98*******</p>
          <p>Email: nbkpi@edu.np, pi.college@gmail</p>
        </div>

        {/* Affiliation & Socials */}
        <div className="flex flex-col items-center">
          <img src="/path-to-ctevt-logo.png" alt="CTEVT" className="w-24 mb-2" />
          <p className="font-semibold">Affiliated with CTEVT</p>
          <p className="font-semibold mt-2">Our Social Media Handles</p>
          <div className="flex space-x-4 mt-2">
            <span>📘</span>
            <span>📞</span>
            <span>📧</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-end">
          {['Home', 'Courses', 'Department', 'About us', 'Gallery', 'Notification', 'Contact'].map((item) => (
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              key={item}
              className="hover:underline"
            >
              {item}
            </a>
          ))}
          <div className="text-4xl font-extrabold transform rotate-12 mt-4">POLICY</div>
        </div>
      </footer>
    </div>
  );
}

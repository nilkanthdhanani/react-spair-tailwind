import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-400">YourLogo</a>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  )
}

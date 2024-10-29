"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <div className="space-x-8 text-lg font-semibold">
          <Link href="/" className="text-gray-800 hover:text-teal-500">
            Home
          </Link>
          <Link href="/portfolio" className="text-gray-800 hover:text-teal-500">
            Portfolio
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-teal-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyPortfolio</Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link href="/portfolio" className="text-gray-800 hover:text-blue-500">
            Portfolio
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
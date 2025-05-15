
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-tennessee-orange shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-white font-bold text-xl md:text-2xl">Tennessee Prohibition</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition-colors">
              Home
            </Link>
            <Link to="/recruits" className="text-white hover:text-gray-200 font-medium transition-colors">
              Recruits
            </Link>
            <Link to="/roster" className="text-white hover:text-gray-200 font-medium transition-colors">
              Roster
            </Link>
            <Link to="/schedule" className="text-white hover:text-gray-200 font-medium transition-colors">
              Schedule
            </Link>
            <Link to="/donate" className="text-white hover:text-gray-200 font-medium transition-colors">
              Donate
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-tennessee-orange border-t border-white/10">
            <Link 
              to="/"
              className="block px-3 py-2 text-white font-medium hover:bg-orange-600 rounded-md"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/recruits"
              className="block px-3 py-2 text-white font-medium hover:bg-orange-600 rounded-md"
              onClick={closeMenu}
            >
              Recruits
            </Link>
            <Link 
              to="/roster"
              className="block px-3 py-2 text-white font-medium hover:bg-orange-600 rounded-md"
              onClick={closeMenu}
            >
              Roster
            </Link>
            <Link 
              to="/schedule"
              className="block px-3 py-2 text-white font-medium hover:bg-orange-600 rounded-md"
              onClick={closeMenu}
            >
              Schedule
            </Link>
            <Link 
              to="/donate"
              className="block px-3 py-2 text-white font-medium hover:bg-orange-600 rounded-md"
              onClick={closeMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

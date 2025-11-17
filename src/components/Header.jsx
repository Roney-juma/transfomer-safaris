import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative">
      {/* Top contact bar */}
      <div className="bg-safari-navy text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+254 722 713 514</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@transformersafaris.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Experience Authentic African Safaris</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Home</a>
            <a href="#tours" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Safari Tours</a>
            <a href="#about" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">About Us</a>
            <a href="#gallery" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-safari-orange text-white px-6 py-2 rounded-full hover:bg-safari-yellow transition-colors font-medium">
              Book Safari
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Home</a>
              <a href="#tours" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Safari Tours</a>
              <a href="#about" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">About Us</a>
              <a href="#gallery" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-safari-navy hover:text-safari-orange transition-colors font-medium">Contact</a>
              <button className="bg-safari-orange text-white px-6 py-2 rounded-full hover:bg-safari-yellow transition-colors font-medium w-fit">
                Book Safari
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from "./VPAC-logo.png"

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4 md:px-12 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={Image}  
            alt="VPAC Logo" 
            className="h-10 md:h-14 lg:h-16 w-auto"
            
            loading="eager"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-14 ml-auto mr-14">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
              <span>Solution</span>
              <ChevronDown className="w-4 h-4 ml-1 mt-[1px]" />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
              <span>About</span>
              <ChevronDown className="w-4 h-4 ml-1 mt-[1px]" />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 ml-1 mt-[1px]" />
            </button>
          </div>
          
          <a href="#contact" className="text-gray-700 hover:text-gray-900 text-base">
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#0095E8] text-white px-8 py-2.5 text-[15px] hover:bg-blue-600 transition-colors pt-4 pb-4">
            Request Demo
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-[88px] left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
                <span>Solution</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
                <span>About</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <button className="flex items-center text-gray-700 hover:text-gray-900 text-base">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <a href="#contact" className="text-gray-700 hover:text-gray-900 text-base">
                Contact
              </a>

              <button className="bg-[#0095E8] text-white px-8 py-2.5 text-[15px] hover:bg-blue-600 transition-colors w-full">
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
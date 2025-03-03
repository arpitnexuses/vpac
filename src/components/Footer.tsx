"use client"
import React from 'react';
import vpaclogo from "./VPAC-white.png"

function Footer() {
  return (
    <footer className="bg-[#2D0A31] text-white rounded-t-[32px]">
      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Are you ready to take your business to the next level ?
        </h2>
        <p className="text-white/70 text-lg max-w-3xl">
          Achieve significant business improvements with a free Discovery Call. Collaborate with our experienced team to uncover customized solutions that deliver impactful, measurable results—assured.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="border-t-2 border-[#39B3C2] w-[95%] mx-auto" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <img 
              src={vpaclogo} 
              alt="VPAC Logo"
              className="w-[180px] h-auto mb-4 mt-4"
            />
          </div>

          {/* Sector Specialization */}
          <div>
            <h3 className="text-white text-[16px] font-medium mb-6">
              Sector Specialization
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  SME
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  Enterprises
                </a>
              </li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h3 className="text-white text-[16px] font-medium mb-6">
              More Information
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-[15px] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-[16px] font-medium mb-6">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <a href="#" className="inline-block mt-8 px-6 py-3 mb-4 bg-[#A05EB5] text-white text-[15px] font-medium rounded-tr-full rounded-tl-none rounded-br-none rounded-bl-none hover:bg-opacity-90 transition-colors">
              WE'RE HIRING! ↗
            </a>
          </div>
        </div>
        {/* <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} VPAC. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}

export default Footer; 
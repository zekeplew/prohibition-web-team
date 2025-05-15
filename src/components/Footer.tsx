
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tennessee-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Tennessee Prohibition</h3>
            <p className="text-sm mb-4">University of Tennessee Men's Ultimate Frisbee Team</p>
            <p className="text-sm">Knoxville, Tennessee</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-tennessee-orange transition-colors">Home</Link></li>
              <li><Link to="/recruits" className="text-sm hover:text-tennessee-orange transition-colors">Recruits</Link></li>
              <li><Link to="/roster" className="text-sm hover:text-tennessee-orange transition-colors">Roster</Link></li>
              <li><Link to="/schedule" className="text-sm hover:text-tennessee-orange transition-colors">Schedule</Link></li>
              <li><Link to="/donate" className="text-sm hover:text-tennessee-orange transition-colors">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {/* Social Media Icons */}
              <a href="https://www.instagram.com/tennesseeultimate/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tennessee-orange">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:tennmultimate@gmail.com" className="text-white hover:text-tennessee-orange">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="text-sm">Email: tennmultimate@gmail.com</p>
          </div>
        </div>
        
        {/* Sponsor Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-lg font-bold mb-6 text-center">Our Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="bg-white p-4 rounded-lg max-w-[180px] h-auto">
              <img 
                src="/lovable-uploads/6b8aba9c-7bc9-428e-9c93-c37ac220c561.png" 
                alt="Onward Physical Therapy"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white p-4 rounded-lg max-w-[180px] h-auto">
              <img 
                src="/lovable-uploads/9ae09722-d258-44b2-b7b9-8c333043aaec.png" 
                alt="Xul Beer Co"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Tennessee Prohibition. All rights reserved.</p>
          <p className="text-sm text-gray-300 mt-2 md:mt-0">
            Not an official University of Tennessee organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

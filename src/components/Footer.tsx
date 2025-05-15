
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
              {/* Social Media Icons Placeholder */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tennessee-orange">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tennessee-orange">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="mailto:team@tennesseeprohibition.com" className="text-white hover:text-tennessee-orange">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="text-sm">Email: team@tennesseeprohibition.com</p>
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

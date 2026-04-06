import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";

const Footer = () => {
  const menuItems = (
    <ul className="flex flex-col gap-2 mt-4 text-neutral-400">
      <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
      <li><Link to="/apps" className="hover:text-white transition-colors">Apps</Link></li>
      <li><Link to="/installation" className="hover:text-white transition-colors">Installation</Link></li>
    </ul>
  );

  return (
    <footer className="bg-[#001931] text-base-100 pt-12 pb-6 px-6 md:px-16">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-neutral-700 pb-10">
        
       
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
            <p className="font-bold text-2xl tracking-tight">Hero.io</p>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Discover and manage your favorite apps with ease. Your ultimate destination for productivity and tools.
          </p>
        </div>

       
        <div className="md:ml-20">
          <p className="text-lg font-semibold border-b border-blue-500 w-fit mb-2">Quick Menus</p>
          {menuItems}
        </div>

        
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Connect With Us</p>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.facebook.com/md.hanjala.1447342" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-500 transition-all hover:-translate-y-1">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/mdhanjala01/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-pink-500 transition-all hover:-translate-y-1">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/hanjala/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-all hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="https://www.threads.net/@mdhanjala01" target="_blank" rel="noopener noreferrer" 
               className="hover:text-neutral-400 transition-all hover:-translate-y-1">
              <FaThreads />
            </a>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-neutral-500 gap-4">
        <div className="flex gap-6">
          <Link to="/terms" className="hover:underline">Terms & Condition</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p>&copy; 2026 <span className="text-blue-400 font-medium">Hero.io</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
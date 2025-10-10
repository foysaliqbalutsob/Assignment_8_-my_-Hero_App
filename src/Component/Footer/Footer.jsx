import React from "react";
import logo from"../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        
        <div className="flex flex-col items-center md:items-start">
         
            <img className="h-20" src={logo} alt="" />
          <p className="text-center md:text-left">
            Hero.OI Industries Ltd.
            <br />
            Providing reliable tech since 1992
            <br />
            @copyright 2025 by foysal Iqbal Utsob
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Twitter</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-200 transition">GitHub</a>
            <a href="https://github.com/" className="hover:text-red-400 transition">Gmail</a>
          </div>

          <div className="flex space-x-4">
            <a href="/" className="hover:text-green-400 transition">Home</a>
            <a href="/app" className="hover:text-yellow-400 transition">Apps</a>
            <a href="/installation" className="hover:text-purple-400 transition">Installation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

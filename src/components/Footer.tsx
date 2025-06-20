
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-lg animate-fade-in">
          © 2025 Harshal Rohra. Built with curiosity and too much caffeine ☕
        </p>
        <div className="mt-4 animate-fade-in delay-300">
          <p className="text-gray-400">
            Made with ❤️ using React, Tailwind CSS, and lots of creative energy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

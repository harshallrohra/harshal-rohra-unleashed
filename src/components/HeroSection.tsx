
import React, { useState, useEffect } from 'react';
import FloatingIcons from './FloatingIcons';

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["Hi", "Namaste", "Bonjour", "Hola", "Ciao", "Konnichiwa"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % greetings.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-yellow-400 flex items-center justify-center relative overflow-hidden">
      <FloatingIcons />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-black">
            <span className="inline-block animate-bounce">
              {greetings[greetingIndex]}
            </span>
            , I'm Harshal 👋
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-800 animate-fade-in delay-300">
            Computer Science Engineering Student
          </p>
          
          <p className="text-xl text-gray-700 animate-fade-in delay-500">
            Building the future with code, creativity, and a whole lot of curiosity 🚀
          </p>
        </div>

        <div className="flex justify-center animate-scale-in delay-700">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img 
              src="/lovable-uploads/cfeb5ce3-1fe7-4bdf-bf1c-df5022be370b.png"
              alt="Harshal Rohra"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-black text-2xl">↓</div>
        <p className="text-black text-sm mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;

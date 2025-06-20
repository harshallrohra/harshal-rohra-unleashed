
import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 sticky top-0">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 animate-fade-in">
            About Me
          </h2>
          
          <div className="text-xl md:text-2xl leading-relaxed space-y-6 animate-fade-in delay-300">
            <p>
              I'm Harshal — a 2nd-year CSE student at SRM University who's basically in a 
              committed relationship with code and curiosity 🤓
            </p>
            
            <p>
              I'm passionate about building fun and useful tech, especially IoT projects 
              that feel like magic (but with wires). When I'm not debugging code, you'll 
              find me breaking it down on the dance floor with Jattsquad or sketching 
              portraits for friends.
            </p>
            
            <p className="text-yellow-400 font-semibold">
              Currently seeking opportunities to turn caffeine into code and ideas into reality! ☕➡️💻
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="animate-pulse text-9xl absolute top-1/4 left-1/4">🧠</div>
        <div className="animate-pulse text-6xl absolute bottom-1/4 right-1/4 delay-500">⚡</div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-yellow-400 py-20 sticky top-0">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 animate-fade-in">
            <div className="text-8xl animate-bounce mb-8">👋</div>
            <h2 className="text-5xl md:text-7xl font-bold text-black">
              Let's Talk!
            </h2>
            <p className="text-2xl text-gray-800">
              Got an exciting project? Need a creative developer? Or just want to chat about tech and dance? ☕
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in delay-300">
            <a 
              href="mailto:harshalrohra4@gmail.com"
              className="group bg-black text-white rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">📧</div>
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-gray-300">harshalrohra4@gmail.com</p>
            </a>
            
            <a 
              href="https://github.com/harshallrohra"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">🐙</div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-300">@harshallrohra</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/harshal-rohra-8334aa289"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">💼</div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300">@harshal-rohra</p>
            </a>
            
            <a 
              href="https://instagram.com/harshallrohra"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">📸</div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-300">@harshallrohra</p>
            </a>
          </div>
          
          <div className="animate-fade-in delay-500">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full">
              <span>Currently open to internships and exciting projects!</span>
              <span className="animate-pulse">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

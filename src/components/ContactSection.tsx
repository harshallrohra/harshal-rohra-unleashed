
import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-yellow-400 py-20 sticky top-0">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6 animate-fade-in">
            <div className="text-8xl animate-bounce mb-8">👋</div>
            <h2 className="text-5xl md:text-7xl font-bold text-black">
              Let's Connect!
            </h2>
            <p className="text-2xl text-gray-800 max-w-3xl mx-auto">
              Got an exciting project? Need a creative developer? Or just want to chat about tech and dance?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in delay-300">
            <a 
              href="mailto:harshalrohra4@gmail.com"
              className="group relative bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 hover:from-red-600 hover:to-red-700 transition-all duration-500 hover:scale-105 transform min-h-[200px] flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <Mail size={48} className="mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-3">Email Me</h3>
                <p className="text-red-100 text-lg mb-4">Let's discuss your next project</p>
                <p className="text-red-200 font-mono">harshalrohra4@gmail.com</p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </a>
            
            <a 
              href="https://github.com/harshallrohra"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-800 to-black text-white rounded-2xl p-8 hover:from-gray-900 hover:to-gray-800 transition-all duration-500 hover:scale-105 transform min-h-[200px] flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <Github size={48} className="mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-3">GitHub</h3>
                <p className="text-gray-300 text-lg mb-4">Check out my code adventures</p>
                <p className="text-gray-400 font-mono">@harshallrohra</p>
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-white opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/harshal-rohra-8334aa289"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 hover:from-blue-700 hover:to-blue-800 transition-all duration-500 hover:scale-105 transform min-h-[200px] flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <Linkedin size={48} className="mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-3">LinkedIn</h3>
                <p className="text-blue-100 text-lg mb-4">Connect professionally</p>
                <p className="text-blue-200 font-mono">@harshal-rohra</p>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white opacity-5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            </a>
            
            <a 
              href="https://instagram.com/harshallrohra"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-2xl p-8 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-500 hover:scale-105 transform min-h-[200px] flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <Instagram size={48} className="mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-3">Instagram</h3>
                <p className="text-pink-100 text-lg mb-4">Behind the scenes content</p>
                <p className="text-pink-200 font-mono">@harshallrohra</p>
              </div>
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </a>
          </div>
          
          <div className="animate-fade-in delay-500">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg">
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

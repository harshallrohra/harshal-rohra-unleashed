
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    "Initializing Harshal's neural network...",
    "Loading creativity modules...",
    "Compiling dance moves and code...",
    "Waking up Harshal's brain... ✨"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => prev < lines.length - 1 ? prev + 1 : prev);
    }, 800);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 animate-fade-in">
      <div className="text-green-400 font-mono text-lg md:text-xl space-y-4">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index <= currentLine ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {line}
            {index === currentLine && showCursor && (
              <span className="animate-pulse">_</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;

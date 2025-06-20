
import React from 'react';

const FloatingIcons = () => {
  const icons = [
    { icon: '💻', delay: '0s', duration: '8s' },
    { icon: '🔧', delay: '2s', duration: '10s' },
    { icon: '❤️', delay: '4s', duration: '12s' },
    { icon: '☕', delay: '1s', duration: '9s' },
    { icon: '🧠', delay: '3s', duration: '11s' },
    { icon: '🎵', delay: '5s', duration: '7s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 animate-float"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;


import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '⚡' },
    { name: 'Arduino', icon: '🔧' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Git & GitHub', icon: '🔀' },
    { name: 'Machine Learning', icon: '🧠' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 py-20 sticky top-0">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-white mb-16 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="relative w-96 h-96 mx-auto">
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={index}
                className="absolute bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-orbit group cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px - 2rem)`,
                  top: `calc(50% + ${y}px - 2rem)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="text-2xl text-center group-hover:animate-bounce">
                  {skill.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            );
          })}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-pulse">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


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
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-full p-6 shadow-lg hover:scale-110 transition-all duration-300 animate-float group cursor-pointer flex flex-col items-center justify-center"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              <div className="text-3xl md:text-4xl text-center group-hover:animate-bounce mb-2">
                {skill.icon}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-800 text-center whitespace-nowrap">
                {skill.name}
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="text-6xl animate-pulse">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

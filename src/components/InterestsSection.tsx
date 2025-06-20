
import React from 'react';

const InterestsSection = () => {
  const interests = [
    {
      title: "Dancer in Jattsquad",
      description: "Part of SRM's energetic college dance crew, breaking it down on stage!",
      icon: "💃"
    },
    {
      title: "Singing & Freestyling",
      description: "Occasionally caught breaking into a melody between debugging sessions",
      icon: "🎵"
    },
    {
      title: "Sketching Portraits",
      description: "Love making hand-drawn portraits and gifting them to friends",
      icon: "🎨"
    },
    {
      title: "Performing Arts",
      description: "From dance battles to cultural nights - always ready for the stage",
      icon: "🎭"
    },
    {
      title: "Clean-Freak Mode",
      description: "Obsessively neat - my hostel room might be cleaner than your code!",
      icon: "✨"
    }
  ];

  return (
    <section className="min-h-screen bg-coral-100 py-20 sticky top-0" style={{backgroundColor: '#FFF5F5'}}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-16 space-x-8">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 animate-fade-in">
            Things That Make Me, Me!
          </h2>
          <div className="relative animate-scale-in delay-500">
            <img 
              src="/lovable-uploads/e87f9da3-0e3d-47c2-a4e9-9144668b7efb.png"
              alt="Harshal in Bhangra attire"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-orange-400 shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce transition-all">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-600">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

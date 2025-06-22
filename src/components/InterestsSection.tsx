
import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

const InterestsSection = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const interests = [
    {
      title: "Dancer in Jattsquad",
      description: "Part of SRM's energetic college dance crew, breaking it down on stage",
      fullDescription: "As a core member of Jattsquad, SRM's premier dance crew, I've performed at numerous college festivals and competitions. From Bhangra to contemporary, hip-hop to classical fusion, our crew brings energy and passion to every performance. We've won multiple inter-college competitions and represent the vibrant culture of our university.",
      icon: "💃",
      color: "from-orange-400 to-red-500",
      images: ["/lovable-uploads/e87f9da3-0e3d-47c2-a4e9-9144668b7efb.png"]
    },
    {
      title: "Singing & Freestyling",
      description: "Occasionally caught breaking into a melody between debugging sessions",
      fullDescription: "Music has always been my escape and creative outlet. Whether it's humming while coding or freestyling with friends, music keeps my creative juices flowing. I enjoy experimenting with different genres and sometimes perform at college events.",
      icon: "🎵",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Sketching Portraits",
      description: "Love making hand-drawn portraits and gifting them to friends",
      fullDescription: "There's something magical about capturing someone's essence on paper. I specialize in pencil portraits and have gifted custom sketches to friends and family. Each portrait tells a story and captures a moment in time.",
      icon: "🎨",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Performing Arts",
      description: "From dance battles to cultural nights - always ready for the stage",
      fullDescription: "The stage is where I feel most alive. Whether it's a dance battle, cultural performance, or hosting events, I love connecting with audiences and sharing the joy of performance art.",
      icon: "🎭",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Clean-Freak Mode",
      description: "Obsessively neat - my hostel room might be cleaner than your code",
      fullDescription: "Organization isn't just a habit, it's a lifestyle. My friends joke that my room looks like it belongs in a magazine. This attention to detail translates into my coding practices too - clean code, organized projects, and systematic approaches to problem-solving.",
      icon: "✨",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const InterestModal = ({ interest, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-gradient-to-r ${interest.color} p-6 rounded-t-2xl text-white relative`}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="text-4xl mb-4">{interest.icon}</div>
          <h3 className="text-2xl font-bold">{interest.title}</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {interest.fullDescription}
          </p>
          {interest.images && (
            <div className="grid gap-4">
              {interest.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={interest.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
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
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-orange-400 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedInterest(interests[0])}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedInterest(interest)}
              >
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${interest.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:animate-bounce transition-all">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                    {interest.title}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {interest.description}
                  </p>
                  <div className="text-sm text-gray-400 font-medium">
                    Click to explore more
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in delay-700">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These interests shape who I am as a person and a developer. They teach me creativity, discipline, attention to detail, and the importance of continuous learning.
            </p>
          </div>
        </div>
      </section>

      {selectedInterest && (
        <InterestModal 
          interest={selectedInterest} 
          onClose={() => setSelectedInterest(null)} 
        />
      )}
    </>
  );
};

export default InterestsSection;

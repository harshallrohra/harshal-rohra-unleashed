
import React from 'react';

const EducationSection = () => {
  const timeline = [
    {
      year: "2022-2026",
      title: "BTech in Computer Science Engineering",
      institution: "SRM University, Chennai",
      description: "Pursuing comprehensive education in computer science with focus on practical applications"
    },
    {
      year: "2023",
      title: "PRADAN Field Survey",
      institution: "Climate Smart Villaging + GPDP",
      description: "Conducted field research on sustainable village development and climate adaptation"
    },
    {
      year: "2023-2024",
      title: "Hackathon Achievements",
      institution: "Various Competitions",
      description: "Secured top positions in multiple hackathons, showcasing problem-solving skills"
    },
    {
      year: "2022-Present",
      title: "Merit-Based Scholarships",
      institution: "Academic Excellence",
      description: "Consistent academic performance earning multiple merit scholarships"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20 sticky top-0">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Education & Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-yellow-400"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative flex items-start mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="absolute left-6 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
                  <div className="text-yellow-600 font-bold text-lg mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-yellow-600 font-semibold mb-3">
                    {item.institution}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

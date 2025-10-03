
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Blind Stick",
      description: "Arduino-based ultrasonic stick that buzzes/alerts on obstacles, making navigation safer and more intuitive.",
      tech: ["Arduino", "Ultrasonic Sensors", "C++"],
      color: "bg-blue-500"
    },
    {
      title: "Heart Rate Monitor",
      description: "Real-time BPM tracking system using Arduino and pulse sensors with live data visualization.",
      tech: ["Arduino", "Pulse Sensor", "Data Visualization"],
      color: "bg-red-500"
    },
    {
      title: "Aug Medix",
      description: "Java-MySQL powered AI bot that suggests personalized home remedies based on symptoms.",
      tech: ["Java", "MySQL", "AI/ML"],
      color: "bg-green-500"
    },
    {
      title: "Lost & Found System",
      description: "Comprehensive UI system for managing lost and found items in educational institutions.",
      tech: ["Java", "MySQL", "UI/UX"],
      color: "bg-purple-500"
    },
    {
      title: "Airline Reservation System",
      description: "Full-stack booking tool with CRUD operations for seamless flight reservations.",
      tech: ["Java", "MySQL", "CRUD Operations"],
      color: "bg-orange-500"
    },
    {
      title: "EEG-based Parkinson's Disease Detection",
      description: "Built a deep learning model using Attention-DenseNet for EEG signal classification. Optimized hyperparameters with ITDO algorithm, achieving high accuracy for early Parkinson's detection.",
      tech: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="min-h-screen bg-yellow-100 py-20 sticky top-0">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Projects I've Loved Building
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

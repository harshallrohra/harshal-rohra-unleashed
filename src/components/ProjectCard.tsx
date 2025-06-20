
import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${project.color}`}></div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-600 mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-yellow-100 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

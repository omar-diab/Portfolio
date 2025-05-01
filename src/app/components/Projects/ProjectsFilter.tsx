'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  tools: string[];
}

interface ProjectsFilterProps {
  projects: Project[];
  onFilterChange: (category: string) => void;
}

const ProjectsFilter = ({ projects, onFilterChange }: ProjectsFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique categories from the projects
  const categories = ['All', ...new Set(projects.flatMap(project => project.categories))];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-8 p-4 border-l-2 border-b-2 border-primary rounded-lg shadow-lg sticky top-4">
      <h3 className="text-lg font-medium text-white mb-4">Filter Projects</h3>
      <div className="flex flex-col gap-2 mb-4 w-fit">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`
              px-4 py-2 text-sm rounded-md transition-colors border-l-2 border-b-2
              ${activeFilter === category
                ? 'text-white'
                : 'text-primary border-primary'}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
'use client';

import { useState } from 'react';
import { MainTitle } from "../";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsLayout from "./ProjectsLayout";
import { projects } from '@/data/projects'; 

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  tools: string[];
}

const MyProjects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.categories.includes(category)
      ));
    }
  };

  return (
    <section className="max-w-[900px] h-fit m-auto p-6">
      <div className="space-y-8">
        <MainTitle title="PROJECTS" />

        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8" 
          data-aos="fade-up" 
          data-aos-duration="1300"
        >
          <div className="md:col-span-1">
            <ProjectsFilter 
              projects={projects} 
              onFilterChange={handleFilterChange} 
            />
          </div>

          <div className="md:col-span-3">
            <ProjectsLayout projects={filteredProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects
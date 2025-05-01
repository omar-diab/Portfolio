'use client';

import Image from 'next/image';
import Buttons from '../Ui/Buttons';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string[];
  tools: string[];
}

interface ProjectsLayoutProps {
  projects: Project[];
}

const ProjectsLayout = ({ projects }: ProjectsLayoutProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <article
          key={project.id}
          className="transition-all duration-300 rounded-lg p-5 shadow-lg border-primary border-b-2 border-l-2 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay={project.id * 100}
        >
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-primary">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs bg-primary rounded-xl text-white"
                >
                  {tool}
                </span>
              ))}
            </div>

            <Buttons href={project.link} label="View Project" />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectsLayout;
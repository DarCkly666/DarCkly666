import { useState, useEffect } from "react";
import { ProjectItem } from "../components/ProjectItem";

interface Project {
  id: number | string;
  name: string;
  description: string;
  url_github: string;
  url_preview: string;
  image: string;
  techs: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project1",
    url_preview: "https://project1.darckly666.vercel.app/",
    image: "https://picsum.photos/id/10/200/300",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: 2,
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project2",
    url_preview: "https://project2.darckly666.vercel.app/",
    image: "https://picsum.photos/id/10/200/300",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: 3,
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project3",
    url_preview: "https://project3.darckly666.vercel.app/",
    image: "https://picsum.photos/id/10/200/300",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = () => {
      setTimeout(() => {
        setProjects(PROJECTS);
        setIsLoading(false);
      }, 3000);
    };
    fetchProjects();
  }, [projects]);

  return (
    <div className="w-full flex flex-col space-y-5 pb-16 bg-[url('/src/assets/projects_bg.svg')] bg-no-repeat bg-cover bg-center">
      <div className="flex items-end justify-between">
        <span className="w-full bg-accent h-1 md:h-1.5 -skew-x-[55deg]"></span>
        <h2 className="text-2xl md:text-4xl font-bold text-accent ms-5 md:me-10 text-nowrap">
          My Projects
        </h2>
      </div>
      <p className="py-6">Here are some of my projects:</p>
      <div className="md:px-32">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-5 md:space-y-10 w-full">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                name={project.name}
                description={project.description}
                url_github={project.url_github}
                url_preview={project.url_preview}
                image={project.image}
                techs={project.techs}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

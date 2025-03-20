import { useState, useEffect } from "react";
import { ProjectItem } from "../components/ProjectItem";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "react-slick";

export interface IProject {
  id: number | string;
  name: string;
  description: string;
  url_github: string;
  url_preview?: string;
  image: string;
  techs: string[];
}

const PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project1",
    image:
      "https://unsplash.com/photos/AKhkPXnobXw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMGxhbmRzY2FwZSUyMHNub3d8ZW58MHwwfHx8MTc0MjMyNDU3M3ww&force=true&w=1920",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: 2,
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project2",
    url_preview: "https://project2.darckly666.vercel.app/",
    image:
      "https://unsplash.com/photos/5RRseu8n_5s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmFpbnklMjByb2FkfGVufDB8MHx8fDE3NDIzMjQ2NjR8MA&force=true&w=1920",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: 3,
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_github: "https://github.com/darckly666/project3",
    url_preview: "https://project3.darckly666.vercel.app/",
    image:
      "https://unsplash.com/photos/IoLxG5RR8aM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHN1bm55JTIwcm9hZHxlbnwwfDB8fHwxNzQyMzI0Njg3fDA&force=true&w=1920",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = () => {
      setTimeout(() => {
        setProjects(PROJECTS);
        setIsLoading(false);
      }, 1000);
    };
    fetchProjects();
  }, [projects]);

  return (
    <div id="projects" className="w-full flex flex-col space-y-5 pb-16">
      <div className="flex items-end justify-between">
        <span className="w-full bg-accent h-1 md:h-1.5 -skew-x-[55deg]"></span>
        <Slide direction="right">
          <h2 className="text-2xl md:text-4xl font-bold text-accent ms-5 md:me-10 text-nowrap">
            My Projects
          </h2>
        </Slide>
      </div>
      <p className="py-6">Here are some of my projects:</p>
      <div className="">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Fade>
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
            </Fade>
          </div>
        ) : (
          <Slider
            {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              fade: true,
              arrows: false,
              centerPadding: "0px",
              fadeSpeed: 500,
              centerMode: true,
            }}
          >
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                url_github={project.url_github}
                url_preview={project.url_preview}
                image={project.image}
                techs={project.techs}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

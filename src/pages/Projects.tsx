import { useState, useEffect } from "react";
import { ProjectItem } from "../components/ProjectItem";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import { IProject } from "../app-types";
import { FirebaseService } from "../services/firebase.service";

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [breakpoint, setBreakpoint] = useState<number>(0);
  const firebaseService = FirebaseService.getInstance();

  const calcNumberOfProjects = (): number => {
    if (breakpoint >= 768 && breakpoint < 1024) {
      return 2;
    } else if (breakpoint >= 1024) {
      return 3;
    }
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsDb = await firebaseService.getProjects();
        setProjects(projectsDb);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects();
  }, [firebaseService]);

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
              slidesToShow: calcNumberOfProjects(),
              slidesToScroll: 1,
              autoplay: true,
              fade: false,
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

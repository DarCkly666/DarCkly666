import GitIcon from "../components/GitIcon";
import GmailIcon from "../components/GmailIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import logo from "../assets/logo.webp";
import { data } from "../utils/constants";
import { Fade, Slide } from "react-awesome-reveal";

export const Home = () => {
  return (
    <div
      id="main"
      className="min-h-screen flex flex-col md:flex-row items-center justify-evenly relative bg-[url('/src/assets/background.webp')] bg-no-repeat bg-cover bg-center px-4 md:px-10 lg:px-20 xl:px-40"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-4 mt-32 md:mt-0">
        <Fade>
          <img src={logo} alt="avatar" className="w-80 md:w-4/5" />
        </Fade>
      </div>
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-4 bg-background/20 dark:bg-background-dark/20 backdrop-blur-sm rounded-xl p-6">
        <Slide>
          <h1 className="text-4xl md:text-6xl font-bold w-full text-center md:text-start text-accent">
            {data.name}
          </h1>
        </Slide>
        <Slide direction="right">
          <p className="text-xl text-text-dark dark:text-text-dark/80">
            Hello! I'm {data.name}, apassionate{" "}
            <span className="text-accent font-bold">web developer</span> with
            experience in building digital solutions that combine functionality
            and design. I specialize in creating modern, responsive web
            applications using technologies like HTML, CSS, JavaScript, and
            frameworks like React and Node.js. I'm always eager to learn new
            tools and improve my skills to deliver innovative and high-quality
            projects. My goal is to create seamless user experiences while
            embracing the latest industry trends.
          </p>
        </Slide>
        <div className="flex flex-col items-center justify-center space-y-2 w-full">
          <h2 className="text-xl font-bold">Connect with me</h2>
          <div className="flex space-x-2">
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <GitIcon className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <span className="w-0.5 h-6 bg-background-dark dark:bg-background"></span>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <LinkedInIcon className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <span className="w-0.5 h-6 bg-background-dark dark:bg-background"></span>
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <GmailIcon className="w-6 h-6" />
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

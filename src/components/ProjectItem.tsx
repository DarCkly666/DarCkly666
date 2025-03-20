import { FC } from "react";
import { IProject } from "../app-types";

export const ProjectItem: FC<IProject> = ({
  name,
  description,
  url_github,
  url_preview,
  image,
  techs,
}) => {
  return (
    <div
      className="flex bg-cover bg-center h-[400px] items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="p-4 space-y-2 rounded bg-background/20 backdrop-blur dark:bg-background-dark/20">
        <h2 className="md:text-xl font-bold">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex space-x-4">
          <a
            href={url_github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <span>GitHub</span>
          </a>
          {url_preview && (
            <a
              href={url_preview}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <span>Preview</span>
            </a>
          )}
        </div>
        <div className="flex flex-wrap space-x-2">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="bg-accent/50 text-white text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

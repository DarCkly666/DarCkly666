export const ProjectItem = ({
  name,
  description,
  url_github,
  url_preview,
  image,
  techs,
}: ProjectItemProps) => {
  return (
    <div className="max-w-4xl flex flex-col md:flex-row bg-background/10 dark:bg-background-dark/20 backdrop-blur-xl">
      <div className="w-full md:w-72 h-80 md:-skew-x-12 md:hover:skew-0 transition-all duration-300 ease-in-out">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 md:-skew-x-12 space-y-2 ">
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
          <a
            href={url_preview}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <span>Preview</span>
          </a>
        </div>
        <div className="flex flex-wrap space-x-2">
          {techs.map((tech) => (
            <span className="bg-accent/50 text-white text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectItemProps {
  name: string;
  description: string;
  url_github: string;
  url_preview: string;
  image: string;
  techs: string[];
}

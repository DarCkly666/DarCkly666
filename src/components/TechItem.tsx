import { Bounce } from "react-awesome-reveal";

export const TechItem = ({ name, icon }: TechItemProps) => {
  return (
    <Bounce>
      <div className="flex items-center justify-center border border-gray-500 rounded-lg p-4 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-background-dark hover:text-text-dark dark:hover:bg-background dark:hover:text-text">
        <div className="flex flex-col items-center">
          <img src={icon} alt={name} className="w-14 h-14 md:w-20 md:h-20" />
          <h2 className="md:text-xl font-bold">{name}</h2>
        </div>
      </div>
    </Bounce>
  );
};

interface TechItemProps {
  name: string;
  icon: string;
}

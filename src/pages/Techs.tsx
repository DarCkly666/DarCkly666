import { TechItem } from "../components/TechItem";
import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css_old.svg";
import js from "../assets/icons/javascript.svg";
import ts from "../assets/icons/typescript.svg";
import expressjs from "../assets/icons/Express.js_light.svg";
import firebase from "../assets/icons/firebase.svg";
import java from "../assets/icons/java.svg";
import mysql from "../assets/icons/mysql.svg";
import postgresql from "../assets/icons/postgresql.svg";
import nodejs from "../assets/icons/nodejs.svg";
import react from "../assets/icons/React_light.svg";
import tailwind from "../assets/icons/tailwindcss.svg";

export const Techs = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-4xl font-bold text-accent me-5 md:me-10">
          Technologies
        </h2>
        <span className="w-full bg-accent h-1 md:h-1.5 -skew-x-[55deg]"></span>
      </div>
      <div className="h-auto py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <TechItem name="HTML" icon={html} />
        <TechItem name="CSS" icon={css} />
        <TechItem name="JavaScript" icon={js} />
        <TechItem name="TypeScript" icon={ts} />
        <TechItem name="Express.js" icon={expressjs} />
        <TechItem name="Firebase" icon={firebase} />
        <TechItem name="Java" icon={java} />
        <TechItem name="MySQL" icon={mysql} />
        <TechItem name="PostgreSQL" icon={postgresql} />
        <TechItem name="Node.js" icon={nodejs} />
        <TechItem name="React" icon={react} />
        <TechItem name="TailwindCSS" icon={tailwind} />
      </div>
    </div>
  );
};

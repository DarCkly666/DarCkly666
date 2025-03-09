import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-h-navbar bg-transparent flex items-center relative">
      <div className="text-accent w-full h-full absolute top-0 left-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,160C840,181,960,203,1080,224C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <nav className="justify-between items-center w-full h-full hidden md:flex px-4 md:px-10 lg:px-20 xl:px-40 z-10">
        <a href="/" className="text-2xl font-bold">
          Darckly666
        </a>
        <ul className="flex gap-x-10">
          <li>
            <a href="/" className="hover:text-slate-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className=" hover:text-slate-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-slate-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav className="w-full flex flex-col justify-between items-center md:hidden px-4 md:px-10 z-10">
        <div className="flex items-center justify-between w-full h-full">
          <a href="/" className="text-2xl font-bold">
            Darckly666
          </a>
          <span
            className="rounded p-2 cursor-pointer border border-background-dark text-text dark:border-background dark:text-text-dark hover:bg-background-dark hover:text-text-dark dark:hover:bg-background dark:hover:text-text"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
              </svg>
            )}
          </span>
        </div>
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } w-full overflow-hidden transition-all duration-500 ease-in-out absolute top-navbar z-50 left-0 right-0 md:hidden py-4 bg-background dark:bg-background-dark shadow dark:shadow-xl shadow-accent`}
        >
          <li className="w-full">
            <a
              href="/"
              className="hover:bg-accent hover:text-text-dark hover:font-bold py-2 px-4 w-full block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:bg-accent hover:text-text-dark hover:font-bold py-2 px-4 w-full block"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:bg-accent hover:text-text-dark hover:font-bold py-2 px-4 w-full block"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

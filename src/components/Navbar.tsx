import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleOverflow() {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }
    handleOverflow();
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        handleOverflow();
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }, [isOpen]);
  return (
    <>
      <div className="w-full flex items-center fixed px-4 md:px-10 lg:px-20 xl:px-40 z-10 py-4 md:py-6">
        <nav className="justify-between items-center w-full h-full flex p-4 md:p-5 rounded-xl bg-background/20 dark:bg-background-dark/20 backdrop-blur-sm">
          <a href="/" className="text-2xl font-bold text-white">
            Darckly666
          </a>
          <ul className="gap-x-10 hidden md:flex">
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
          <span className="block md:hidden" onClick={() => setIsOpen(true)}>
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
          </span>
        </nav>
      </div>
      <div
        className={`w-full min-h-screen bg-background dark:bg-background-dark fixed top-0 right-0 bottom-0 z-20 flex md:hidden flex-col transition-[left] duration-300 ${
          isOpen ? "left-0" : "-left-[100%]"
        }`}
      >
        <nav className="justify-between items-center w-full h-16 flex px-4 md:px-10 lg:px-20 xl:px-40">
          <a href="/" className="text-2xl font-bold">
            Darckly666
          </a>
          <span onClick={() => setIsOpen(false)}>
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
          </span>
        </nav>
        <ul className="gap-x-10 h-full text-xl text-center flex flex-col justify-evenly items-center">
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
          <li>
            <a href="/contact" className="hover:text-slate-500">
              Contact
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-slate-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

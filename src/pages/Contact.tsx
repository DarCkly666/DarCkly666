import { ChangeEvent, useState } from "react";
import { IContact } from "../app-types";
import { FirebaseService } from "../services/firebase.service";
import pccontact from "../assets/pccontact.webp";
import { Fade, Slide } from "react-awesome-reveal";

const INITIAD_DATA: IContact = {
  name: "",
  email: "",
  message: "",
  date: new Date(),
};

export const Contact = () => {
  const [data, setData] = useState<IContact>(INITIAD_DATA);
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [responseMenssage, setResponseMenssage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const service = FirebaseService.getInstance();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCloseArlet = () => {
    setShowAlert(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setResponseMenssage("");
    setShowAlert(false);
    try {
      await service.setMessage(data);
      setResponseMenssage("Message sent successfully!");
      setData(INITIAD_DATA);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(true);
        setResponseMenssage(`Error: ${e.message}`);
      }
    } finally {
      setShowAlert(true);
      setSending(false);
    }
  };

  return (
    <>
      <Fade delay={100} duration={1500}>
        <div id="contact" className="w-full flex flex-col space-y-5 pt-16">
          <div className="flex items-end justify-between">
            <Slide>
              <h2 className="text-2xl md:text-4xl font-bold text-accent me-5 md:me-10">
                Contact
              </h2>
            </Slide>
            <span className="w-full bg-accent h-1 md:h-1.5 -skew-x-[55deg]"></span>
          </div>
          <div className="h-auto py-6 flex flex-col-reverse md:flex-row text-text dark:text-text-dark">
            <div className="w-full md:w-1/3 h-auto flex items-center justify-center mt-4">
              <img src={pccontact} alt="contact" className="w-2/3 md:w-4/5" />
            </div>
            <form
              className="w-full grow md:w-1/3 flex flex-col items-center  p-0 md:px-20 lg:px-32 xl:px-40"
              onSubmit={handleSubmit}
            >
              <p className="text-lg font-bold mb-5">Message me</p>
              <div className="w-full">
                <label htmlFor="name" className="block text-sm/6 font-medium">
                  Name
                </label>
                <div className="mt-2 w-full">
                  <div className="flex w-full items-center rounded-md bg-background dark:bg-background-dark pl-3 outline-1 -outline-offset-1 outline-background-dark dark:outline-background has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-user w-5 h-5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="inline-block w-full py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Name"
                      value={data.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <label htmlFor="email" className="block text-sm/6 font-medium">
                  Email
                </label>
                <div className="mt-2 w-full">
                  <div className="flex w-full items-center rounded-md bg-background dark:bg-background-dark pl-3 outline-1 -outline-offset-1 outline-background-dark dark:outline-background has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-at h-5 w-5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="inline-block w-full py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="email@example.com"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium"
                >
                  Message
                </label>
                <div className="mt-2 w-full">
                  <div className="flex w-full rounded-md bg-background dark:bg-background-dark pl-3 outline-1 -outline-offset-1 outline-background-dark dark:outline-background has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-accent">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-mail w-5 h-5"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      className="inline-block w-full py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 focus:outline-none sm:text-sm/6 resize-none"
                      placeholder="Message"
                      rows={5}
                      value={data.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-2 rounded-md border border-accent cursor-pointer hover:bg-accent hover:text-text-dark transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-accent"
                  disabled={sending}
                  aria-disabled={sending}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
      {showAlert &&
        (error ? (
          <div className="fixed top-10 right-0 z-50 bg-red-500 p-5 rounded-2xl w-full md:max-w-md flex items-center">
            <div className="grow">{responseMenssage}</div>
            <span className="cursor-pointer" onClick={handleCloseArlet}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-close w-5 h-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </span>
          </div>
        ) : (
          <div className="fixed top-10 right-0 z-50 bg-teal-500 p-5 rounded-2xl w-full md:max-w-md flex items-center">
            <div className="grow">{responseMenssage}</div>
            <span className="cursor-pointer" onClick={handleCloseArlet}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-close w-5 h-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </span>
          </div>
        ))}
    </>
  );
};

"use client";
import { useState } from "react";
import Talk from "../components/talkto";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed start-0 top-0 z-20 w-full mb-10 bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/">
          <span
            className="flex cursor-pointer items-center rtl:space-x-reverse"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <span className="self-center text-2xl font-semibold text-yellow-200">
              {isHover ? "ನ್ಯಾಯ ಕುಟೀರ" : "Nyaya Kutira"}
            </span>
          </span>
        </Link>
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse md:order-2">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-white hover:text-yellow-200 dark:text-white">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer font-semibold text-white hover:text-yellow-200 dark:text-white">
              About Us
            </span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer font-semibold text-white hover:text-yellow-200 dark:text-white">
              Services
            </span>
          </Link>
          <Link href="/blog">
            <span className="cursor-pointer font-semibold text-white hover:text-yellow-200 dark:text-white">
              Blogs
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer font-semibold text-white hover:text-yellow-200 dark:text-white">
              Contact Us
            </span>
          </Link>
          {/* <Link href="/contact">
            <span className="cursor-pointer rounded-lg border p-4 font-semibold text-white hover:text-yellow-200 dark:text-white">
              Ask a question/ ಪ್ರಶ್ನೆ ಕೇಳಿ
            </span>
          </Link>
          <Talk /> */}
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:hidden md:space-x-0">
          <button
            onClick={toggleDrawer}
            className="block p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } fixed top-0 h-full transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="p-4 bg-black h-full w-2/3 relative">
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 p-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h1
              className="font-semibold text-yellow-200"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {isHover ? "ನ್ಯಾಯ ಕುಟೀರ" : "Nyaya Kutira"}
            </h1>
            <hr className="w-auto h-1 mx-auto my-4 border-0 rounded md:my-10 dark:bg-yellow-200" />
            <ol className="flex flex-col space-y-4 pt-6">
              <li>
                <Link href="/">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    Blogs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer text-white hover:text-yellow-200 dark:text-white">
                    Ask a question
                  </span>
                </Link>
              </li>
              <li>
                <Talk/>
              </li>
             
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

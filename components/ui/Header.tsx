import Link from "next/link";
import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

interface INav {
  path: string;
  name: string;
}
const paths: INav[] = [
  {
    name: "INICIO",
    path: "/",
  },
  {
    name: "ORIGEN",
    path: "/origen",
  },
  {
    name: "EL BAR",
    path: "/el-bar",
  },
  {
    name: "PRODUCTOS",
    path: "/productos",
  },
  {
    name: "NOTICIAS",
    path: "/noticias",
  },
  {
    name: "CONTACTO",
    path: "/contacto",
  },
];

export const Header: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <header className="drop-shadow-xl bg-white sticky top-0 left-0 z-50">
      <nav className="container">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.piscovinasdeoro.com.pe/img/logo.jpg"
              className="w-[90px]"
              alt="Viñas de oro"
            />
          </Link>
          <button
            onClick={() => setShowNav((prev) => !prev)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${!showNav ? "hidden" : ""}`}
            id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-sm md:flex-row md:mt-0">
              {paths.map(({ path, name }, i) => (
                <ActiveLink
                  key={i + path}
                  path={path}
                  name={name}
                  className="block py-2 pl-3 pr-4 text-sm text-vinas-brown-1 rounded-sm md:border-0 md:hover:bg-vinas-gray-2 md:hover:text-vinas-brown-3 md:p-4 md:border-transparent md:border-b-2 md:group-[.is-active]:border-b-vinas-brown-2"
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

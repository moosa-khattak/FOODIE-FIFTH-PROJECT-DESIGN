import React from "react";
import logo from "../../assets/Header/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/#",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];
  return (
    <header>
      <nav className="shadow-md dark:text-white">
        <div className="container  ">
          <div className="py-2 flex justify-between  overflow-hidden box-border">
            {/* logo section  */}
            <div className=" ">
              <a href="/#" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-10  cover  " />
                <h1 className="text-2xl sm:text-3xl font-bold">FOODIE</h1>
              </a>
            </div>
            {/* link section  */}

            <div className="flex items-center gap-8 px-2 ">
              {/* DarK Mode  */}
              <div>
                <DarkMode />
              </div>

              {/* links */}

              <ul className="md:flex gap-12 hidden">
                {navLinks.map((links, index) => (
                  <li key={index} className="">
                    <a
                      href={links.href}
                      className="hover:text-primary duration-200 inline-block"
                    >
                      {links.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* order button  */}
              <div className="">
                <button className="flex items-center gap-1 sm:gap-3 bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full cursor-pointer text-white hover:scale-105 duration-300">
                  <span className="hidden sm:block">Order</span>

                  <FaCartShopping className="sm:text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

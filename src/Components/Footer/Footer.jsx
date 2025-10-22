import React from "react";
import logo from "../../assets/Header/logo.png";
import { FaArrowAltCircleDown, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
    const links = [
      {
        name: "Home ",
        href: "/# ", 
      },
      {
        name: "About ",
        href: "/#About",
      },
      {
        name: "Services ",
        href: "/#Contact",
      },
      {
        name: "Login ",
        href: "/#Blogs",
      },
    ];
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container  dark:text-white">
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* company details    */}
          <div className="space-y-2 ">
            <a href="/#" className="flex items-center gap-2">
              <img src={logo} alt="" className="w-10  cover  " />
              <h1 className="text-2xl sm:text-3xl font-bold">FOODIE</h1>
            </a>

            <p className="text-gray-600 mb-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              minima atque voluptas at accusantium similique{" "}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <FaLocationArrow />
              <span>Peshawar</span>
            </div>
            <div className="flex  items-center gap-2 mb-8">
              <FaMobileAlt />
              <span>+923181822395</span>
            </div>

            <div className="flex gap-3">
              <FaInstagram className="text-3xl" />
              <FaFacebook className="text-3xl" />
              <FaLinkedin className="text-3xl" />
            </div>
          </div>
          {/* navigation links     */}

          <div className="md:ml-15">
            <h1 className="text-xl font-bold mb-4 ">Important links</h1>
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:ml-12">
            <h1 className="text-xl font-bold mb-4 ">Important links</h1>
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:ml-12">
            <h1 className="text-xl font-bold mb-4 ">Important links</h1>
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div >

        {/* lower Navbar   */}

        <div className="border-t-2 border-gray-300 dark:border-gray-500 pt-12 text-left sm:text-center">
            <p>&copy; CopyRight 2025 .  All Right Reserved || Made With ❤️ by Moosa  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

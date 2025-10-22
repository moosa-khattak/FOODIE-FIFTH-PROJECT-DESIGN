import React, { useEffect, useState } from "react";
import darkMode from "../../assets/Website/darkMode.png";
import lightMode from "../../assets/Website/lightMode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(`${localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" }`);

  const element = document.documentElement
//   console.log(element)

  useEffect(() => {
   localStorage.setItem("theme" , theme)
   if(theme === "dark"){
    element.classList.add("dark")
   }else{
    element.classList.remove("dark")
   }
  })
  
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={lightMode}
        alt=""
        className={`w-12 absolute top-0 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } duration-200 cursor-pointer`}
      />
      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={darkMode}
        alt=""
        className="w-12 duration-200 cursor-pointer"
      />
    </div>
  );
};

export default DarkMode;

import React, { useEffect } from "react";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Hero Section/Hero";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Appstore from "./Components/Appstore/Appstore";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration : 800 ,
      easing : 'ease-in-sine',
       mirror : true,
       offset : 100,
       delay : 100
    }) ,
    Aos.refresh() 
  
  }, []);
  return (
    <div className="dark:bg-gray-900 duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

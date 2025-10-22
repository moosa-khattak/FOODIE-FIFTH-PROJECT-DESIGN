import React, { useState } from 'react'
import food1 from "../../assets/Biryani/biryani2.png"
import food2 from "../../assets/Biryani/biryani3.png"
import food3 from "../../assets/Biryani/biryani5.png"
import bgimg from "../../assets/Website/vector3.png"

const Hero = () => {
const [imageId , setImageId] = useState(food1)
  const imageList = [
    {
      id: 1,
      image: food1,
      aosDelay: "0",
    },
    {
      id: 2,
      image: food2,
      aosDelay: "300",
    },
    {
      id: 3,
      image: food3,
      aosDelay: "400",
      
    },
  ];

  const bgImage = {
    backgroundImage : `url(${bgimg})`,
    backgroundSize : "cover" ,
    backgroundRepeat : "no-repeat" ,
    backgroundPosition : "center" ,
    height : "100%",
    width :"100%"
  }
  return (
    <section
      style={bgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          {/* text-contant section  */}

          <div className=" dark:text-white flex flex-col  justify-center order-2 sm:order-1 pt-12 sm:pt-0 text-center sm:text-left gap-6 ">
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              Wellcome To The{" "}
              <span className="text-primary dark:text-secondary relative z-50 ">
                {" "}
                Foodie{" "}
              </span>{" "}
              Zone
            </h1>
            <p data-aos="zoom-out" data-aos-duration="500" className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              delectus consequatur laborum commodi, mollitia libero!
            </p>

            <div>
              <button
                data-aos="fade-up"
                data-aos-duration="500"
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:scale-105 duration-300 cursor-pointer "
              >
                Order Now
              </button>
            </div>
          </div>
          {/* image section  */}
          <div className="order-1 sm:order-2 flex flex-col gap-6  lg:gap-16 xl-gap-6  lg:flex-row items-center  overflow-hidden  relative">
            {/* image main   section  */}
            <div className="md:ml-12 lg:ml-15 xl:ml-22 2xl:ml-30">
              <img
                data-aos="zoom-in"
                data-aos-duration="500"
                src={imageId}
                alt=""
                className="w-[400px]  mt-12  sm:mt-0 lg:w-[450px] lg:h-[450px]  object-contain mx-auto animate-[spin_40s_linear_infinite]"
              />
            </div>
            {/* image list  section  */}
            <div className="flex  lg:flex-col lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 bg-secondary/40 dark:bg-secondary/60  lg:bg-white/30 gap-4 py-2 rounded-full ">
              {imageList.map((items) => (
                <img
                  data-aos="fade-up"
                  data-aos-delay = {items.aosDelay}
                  data-aos-duration="500"
                  onClick={() => {
                    setImageId(
                      items.id === 1 ? food1 : items.id === 2 ? food2 : food3
                    );
                  }}
                  key={items.id}
                  src={items.image}
                  alt=""
                  className="w-20  hover:scale-105 duration-200 cursor-pointer object-contain overflow-hidden "
                />
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

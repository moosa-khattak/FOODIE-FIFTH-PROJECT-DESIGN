import React from 'react'
import Header from '../shared/Header'
import image from "../../assets/Biryani/biryani2.png"

const Services = () => {
    const service = [
      {
        image: image,
        text: "Biryani",
        aosdelay: "0",

        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit Aut",
      },
      {
        image: image,
        text: "Chiken kari",
        aosdelay: "200",

        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit Aut",
      },
      {
        image: image,
        text: "Cold Cofee",
        aosdelay: "400",

        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit Aut",
      },
    ];
  return (
    <section className="py-16 sm:py-10">
      <div className="container">
        <div>
          {/* Header Section  */}

          <Header text={"Our Services"} title={"Services"} />
          {/* contant  Section  */}
          <div className="realtive  grid grid-cols-1 gap-20  sm:grid-cols-2 sm:gap-15 md:grid-cols-3  mt-22  items-center     ">
            {service.map((data, index) => (
              <div
              data-aos = "fade-up"
              data-aos-delay = {data.aosdelay}
              data-aos-duration = "300"
                key={index}
                className="group flex flex-col dark:bg-gray-800 dark:text-white  text-center items-center  shadow-lg   rounded-2xl  max-w-[300px] h-[200px]  hover:bg-primary  duration-200 box-border mx-auto
                "
              >
                <div className='h-[100px]  mb-5'>
                  <img
                    src={data.image}
                    alt=""
                    className="max-w-[200px]  transform   -translate-y-14 group-hover:scale-105 duration-200 group-hover:rotate-6"
                  />
                </div>
                <h1 className="text-xl font-bold group-hover:text-white ">
                  {data.text}
                </h1>
                <p className="text-sm line-clamp-2 group-hover:text-white text-gray-400 ">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services

import React from "react";
import Header from "../shared/Header";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const testData = [
    {
      id: 1,
      name: "Samual",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio possimus in sit, odio dolore excepturi?",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "John Doe",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio possimus in sit, odio dolore excepturi?",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Smith",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio possimus in sit, odio dolore excepturi?",
      img: "https://picsum.photos/103/103",
    },
  ];
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col gap-20">
          {/* header section  */}
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-delay = "200">
            <Header text={"Testimonial"} title={"Testimonial"} />
          </div>
          {/* contant section  */}{" "}
          <div data-aos = "zoom-in" data-aos-duration = "400" className="grid grid-cols-1 max-w-[600px] mx-auto  ">
            <Slider {...settings}>
              {testData.map((data) => (
                <div key={data.id} className="  p-4       ">
                  <div className="bg-primary/10 shadow-lg p-4 flex flex-col gap-3 space-y-3 place-items-center dark:bg-gray-800  rounded-2xl   ">
                    <img src={data.img} alt="" className="rounded-full " />
                    <p className="text-center text-sm text-gray-500  dark:text-gray-400">
                      {data.text}
                    </p>
                    <h1 className="font-bold text-xl dark:text-white">
                      {data.name}
                    </h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

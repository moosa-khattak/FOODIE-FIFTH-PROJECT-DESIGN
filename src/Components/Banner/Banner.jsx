import React from 'react'
import image from "../../assets/Biryani/biryani5.png"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <section className="py-16 text-center sm:text-left">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto justify-center  gap-4   ">
          {/* image section  */}
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="400"
              src={image}
              alt=""
              className="max-w-[430px] w-full mx-auto drop-shadow-[_10px_10px_12px_rgba(0,0,0,0.2)]"
            />
          </div>
          {/* text contant section  */}

          <div>
            <h1
              data-aos="fade-left"
              data-aos-duration="400"
              className="text-3xl font-bold mb-6 dark:text-white"
            >
              Lorem ipsum dolor{" "}
            </h1>
            <p
              data-aos="zoom-out"
              data-aos-duration="400"
              className="text-gray-500 text-sm mb-6"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius
              earum consequuntur ipsum veritatis ex.
            </p>
            <p
              data-aos="zoom-out"
              data-aos-duration="400"
              className="text-gray-500 text-sm mb-6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eligendi doloribus officia, aperiam aliquid mollitia sequi vitae
              at? Repudiandae, vitae atque saepe ducimus numquam sit!
              Voluptatem, iste dicta.{" "}
            </p>

            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex gap-6 my-6 justify-center sm:justify-start"
            >
              <div className="p-4  rounded-full bg-violet-100">
                <GrSecure className="text-4xl " />
              </div>
              <div className="p-4  rounded-full bg-orange-100">
                <IoFastFood className="text-4xl " />
              </div>
              <div className="p-4  rounded-full bg-green-100">
                <GiFoodTruck className="text-4xl " />
              </div>
            </div>
            <div>
              <button
                data-aos="fade-up"
                data-aos-duration="500"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary  hover:scale-105 text-white duration-200"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner

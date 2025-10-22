import React from 'react'
import appStore from "../../assets/Appstore/app_store.png"
import playStore from "../../assets/Appstore/play_store.png"
import gif from "../../assets/Appstore/mobile_bike.gif";

const Appstore = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 mt-15">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 items-center">
          {/* contant section  */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            className="space-y-4 order-2 sm:order-1"
          >
            <h1 className=" text-2xl text-center sm:text-left sm:text-[35px] text-gray-700 dark:text-gray-400  font-semibold">
              Foodly is Available For Andriod and IOS
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 text-center sm:text-left">
              <img
                src={playStore}
                alt=""
                className="max-w-[220px] mx-auto sm:mx-0"
              />
              <img
                src={appStore}
                alt=""
                className="max-w-[220px] mx-auto sm:mx-0 "
              />
            </div>
          </div>
          {/* image section  */}
          <div className="order-1 sm:order-2 overflow-hidden">
            <img
              data-aos="zoom-in"
              data-aos-duration="400"
              src={gif}
              alt=""
              className="max-w-[300px] mx-auto shadow-sm "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appstore

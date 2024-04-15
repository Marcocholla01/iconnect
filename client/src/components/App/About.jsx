import React from "react";
import breadcramp from "../../assets/images/breadcrumb-1.webp";
import { Link } from "react-router-dom";
import { FaArrowsAltH } from "react-icons/fa";
import Motion from "./motion";
import { FaCheckToSlot } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div
            className="h-[60vh]  items-center justify-center flex bg-no-repeat bg-cover    rounded-ss-[30px] "
            style={{
              backgroundImage: `url(${breadcramp})`,
            }}
          >
            <div className="absolute flex flex-col gap-2 bg-[#00000065] top-0 right-0 left-0 h-[60vh]  items-center justify-center text-white">
              <Motion>
                <h2 className="text-[90px]">About Us</h2>
              </Motion>
              <Motion>
                <div className="flex items-center gap-3 bg-blue-700 text-white font-semibold rounded-md px-4 py-2 text-[20px]">
                  <Link to={`/`}>Home</Link>
                  <FaArrowsAltH />
                  <Link to={`/about`}>About</Link>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-300 items-center justify-center gap-5 ">
        <div className="flex w-[70%] mt-10 mb-10">
          <div className="flex flex-col ml-10">
            <Motion>
              <span className="text-blue-800 text-[20px] mb-5">About Us</span>
            </Motion>
            <Motion>
              <h2 className="text-[40px]">
                Elevate Your <span className="text-blue-800"> Digital</span>{" "}
              </h2>
            </Motion>
            <Motion>
              <h2 className="text-[40px]">
                Experience with <span className="text-blue-800">Iconnect</span>{" "}
                :
              </h2>
            </Motion>
            <Motion>
              <h2 className="text-[40px]">
                Where Speed Meets{" "}
                <span className="text-blue-800">Innovation</span>.{" "}
              </h2>
            </Motion>
            <div>
              <Motion>
                <p>
                  Upgrade to lightning fast internet speed and unlock a world of
                  seamless <br /> online experience with our high speed internet
                  solution.
                </p>
              </Motion>
              <Motion>
                <div className="flex flex-col text-[25px] mt-5 ">
                  <div className="flex items-center">
                    <FaCheckToSlot className="text-blue-800 mr-3" />
                    <h4>Reliable and Fast Internet</h4>
                  </div>
                  <Motion>
                    <div className="flex flex-col gap-2 ml-8 mt-3">
                      <p className="text-[15px]">
                        💠 Get a reliable and high-speed internet connection.{" "}
                      </p>
                      <p className="text-[15px]">
                        💠Transparent pricing with no hidden fees
                      </p>
                    </div>
                  </Motion>
                </div>
              </Motion>
              <Motion>
                <div className="flex flex-col text-[25px] mt-5 ">
                  <div className="flex items-center">
                    <FaCheckToSlot className="text-blue-800 mr-3" />
                    <h4>Exceptional Support</h4>
                  </div>
                  <Motion>
                    <div className="flex flex-col gap-2 ml-8 mt-3">
                      <p className="text-[15px]">💠 12/7 customer support.</p>
                      <p className="text-[15px]">
                        💠 Transparent policies and practices.
                      </p>
                      <p className="text-[15px]">
                        💠 Diverse plans to meet different needs.
                      </p>
                    </div>
                  </Motion>
                </div>
              </Motion>
            </div>
          </div>

          <Motion>
            <img
              src="https://iaffordablenetsp.co.ke/static/media/AboutSec.4dc54a37a2ced48912e0.webp"
              alt=""
              className="w-[400px] h-[500px] object-cover  rounded-lg ml-8"
            />
          </Motion>
        </div>
        <div className="flex w-[70%] mt-10 mb-10 text-center">
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-[40px] border-b-2 border-blue-800">
              Our <span className="text-blue-800">Vision</span>
            </h2>
            <p className="mt-5 mb-10">
              "To be the leading and{" "}
              <span className="text-blue-800">
                most trusted Internet Service Provider
              </span>
              , empowering individuals and businesses with seamless connectivity
              and exceptional customer experiences."
            </p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-[40px] border-b-2 border-blue-800">
              Our <span className="text-blue-800">Mission</span>
            </h2>
            <p className="mt-5 mb-10">
              "We are committed to delivering cutting-edge internet solutions
              that exceed expectations, innovating with emerging technologies to
              <span className="text-blue-800"> lead the industry</span>, and
              fostering community growth."
            </p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-[40px] border-b-2 border-blue-800">
              Our <span className="text-blue-800">Goals</span>
            </h2>
            <p className="mt-5 mb-10">
              "Expand our coverage, enhance{" "}
              <span className="text-blue-800">speed and reliability</span>, and
              prioritize customer satisfaction to provide reliable internet
              solutions for all."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

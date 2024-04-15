import React, { useState } from "react";
import { FaPlay, FaWifi } from "react-icons/fa6";
import background from "../../assets/images/icconnecthome.webp";
import { Link } from "react-router-dom";
import Motion from "./motion";

const Hero = () => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <>
      <div
        className="h-[100vh]  items-center justify-center flex bg-no-repeat bg-cover bg-center z-[4]"
        style={{
          backgroundImage: `url(${background})`,
        }}

        // style={{
        //   backgroundImage:
        //     "url(https://img.freepik.com/free-photo/silhouette-business-people-discussion-meeting-cityscape-team-concept_53876-146187.jpg?w=1380&t=st=1711827124~exp=1711827724~hmac=17ee4f1ea435835857bee1c7f1c2c9576544f60e1e1b32973ebc9bba8866739c)",
        // }}
      >
        <div className="absolute flex flex-col gap-2 bg-[#000000c5] top-0 right-0 left-0 h-screen  items-center justify-center text-white">
          <div className="flex flex-col items-center md:w-[60%] w-full select-none">
            <Motion>
              <div className="flex mb-3 items-center">
                <FaWifi size={30} className="text-blue-400 mr-3" />
                <p className="md:text-[30px] text-[20px] text-white font-Poppins font-mono font-bold">
                  Affordable Internet Access Point ISP
                </p>
              </div>
            </Motion>
            <Motion>
              <h2 className="capitalize md:text-[75px] text-[45px] text-center">
                {" "}
                for all your Internet needs{" "}
              </h2>
            </Motion>
            <Motion>
              <h2 className="capitalize md:text-[75px] text-[45px] text-center">
                {" "}
                and high connectivity.
              </h2>
            </Motion>

            <div className="md:w-[75%] w-full  text-center mt-4">
              <Motion>
                <h4 className="">
                  Experience seamless connectivity tailored just for you. Dive
                  into a world where streaming, working, and playing are a
                  lag-free delight with our standard swift internet packages.
                </h4>
              </Motion>
            </div>
          </div>
          <Motion>
            <h2 className="text-blue-400 mt-5 font-semibold text-[42px]">
              Ksh 2500<span className="text-white">/month</span>
            </h2>
          </Motion>
          <div className="flex gap-6 mt-3">
            <Motion>
              <Link to={`/plans`} className="no-underline">
                <h4 className="bg-white text-blue-800 font-bold p-3 px-8 rounded-md border-none  hover:text-white hover:bg-blue-800 ">
                  START NOW
                </h4>
              </Link>
            </Motion>
            <Motion>
              <p
                className="bg-blue-600 text-white  p-3 px-4 rounded-md border-none cursor-pointer hover:text-blue-600 hover:bg-white text-center"
                onClick={() => setVideoPopUp(true)}
              >
                <FaPlay className="mr-2" />
                <h4>WATCH VIDEO</h4>
              </p>
            </Motion>
          </div>
        </div>
      </div>

      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[2000]">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white cursor-pointer absolute -top-12 -right-12"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="rounded-lg w-full max-w-2xl"
              controls
              autoPlay={true}
            >
              <source
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Hero;

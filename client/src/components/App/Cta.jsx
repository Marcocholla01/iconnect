import React from "react";
import Cta1 from "../../assets/images/cta1.jpg";
import Cta2 from "../../assets/images/cta2.jpg";
import Cta3 from "../../assets/images/cta3.png";
import Cta4 from "../../assets/images/cta4.png";
import background from "../../assets/images/cta-bg-img-1.jpg";
import { GiReturnArrow } from "react-icons/gi";
import Motion from "./motion";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section
        className="overflow-hidden  relative sm:items-center 
      items-center h-[100vh] flex bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute flex flex-col gap-2 bg-[#000000c5] top-0 right-0 left-0 h-screen   justify-center text-white">
          <div className="flex flex-col  w-full select-none">
            <div className="flex w-full items-start">
              <img
                alt=""
                src={Cta3}
                className=" h-[100vh] w-[50%] object-fit"
              />
              <div className="flex flex-col justify-center  text-center w-full p-20">
                <Motion>
                  <h2 className="text-[60px] font-bold text-white  mt-1 text-start">
                    Save Money By Bund-
                  </h2>
                </Motion>
                <Motion>
                  <h2 className="text-[60px] font-bold text-white  mt-1 text-start">
                    Ling Your Internet
                  </h2>
                </Motion>
                <Motion>
                  <h2 className="text-[60px] font-bold text-white  mt-1 text-start">
                    Service
                  </h2>
                </Motion>

                <Motion>
                  <p className="text-white md:mt-4 block text-[20px]">
                    When choosing among the best high speed Internet providers,
                    there are several other factors that should be taken into
                    consideration besides just the available download speeds.
                  </p>
                </Motion>

                <div className="mt-4 md:mt-8 flex ">
                  <div className="flex flex-col mt-10 justify-between">
                    <Motion>
                      <span className="text-white text-[25px] mb-10">
                        {" "}
                        Kshs: 2500/Month
                      </span>
                    </Motion>

                    <Motion>
                      <Link to={`/plans`} className="no-underline">
                        <h4 className="bg-white text-blue-800 font-bold p-3 px-8 rounded-md border-none  hover:text-white hover:bg-blue-800 uppercase">
                          Learn more
                        </h4>
                      </Link>
                    </Motion>
                  </div>
                </div>
                <div className="flex absolute -right-6 bottom-0">
                  <img
                    src={Cta4}
                    alt=""
                    // height={150}
                    // width={300}
                    className="flex justify-end"
                  />
                </div>

                {/* <a
                  className="group relative inline-block focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Download
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;

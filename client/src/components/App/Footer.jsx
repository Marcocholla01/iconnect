import React from "react";
import {
  footerAccount,
  footerContactInfo,
  footerSupport,
  footerWebsiteLinks,
} from "../../data/data";
import { Link } from "react-router-dom";
import Motion from "./motion";
import { BsSuitDiamondFill } from "react-icons/bs";
import SocialMedia from "./SocialMedia";
import BackToTopButton from "./BackToTopButton";

const Footer = () => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <SocialMedia />
      <BackToTopButton />
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Motion>
                <h2 className="text-blue-800 sm:justify-start text-[40px]">
                  iconnect
                </h2>
              </Motion>
              <Motion>
                <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                  Experience seamless connectivity tailored just for you. Dive
                  into a world where streaming, working, and playing are a
                  lag-free delight with our standard swift internet packages.
                </p>
              </Motion>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <Motion>
                  <h2 className="text-[30px]">My Account</h2>
                </Motion>

                <ul className="mt-8 space-y-4 text-sm">
                  {footerAccount.map((i, index) => (
                    <>
                      <Motion>
                        <div key={index} className="flex gap-2 mt-3 ">
                          <Link
                            to={i.link}
                            className="flex gap-2 no-underline text-black hover:text-blue-700"
                          >
                            <BsSuitDiamondFill className="text-blue-500" />
                            <p className="text-[16px]">{i.item}</p>
                          </Link>
                        </div>
                      </Motion>
                    </>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <Motion>
                  <h2 className="text-[30px]">Support Link</h2>
                </Motion>
                <ul className="mt-8 space-y-4 text-sm">
                  {footerSupport.map((i, index) => (
                    <>
                      <Motion>
                        <div key={index} className="flex gap-2 mt-3">
                          <Link
                            to={i.link}
                            className="flex gap-2 no-underline text-black hover:text-blue-700"
                          >
                            <BsSuitDiamondFill className="text-blue-500" />
                            <p className="text-[16px]">{i.item}</p>
                          </Link>
                        </div>
                      </Motion>
                    </>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <Motion>
                  <h2 className="text-[30px]">Website Link</h2>
                </Motion>

                <ul className="mt-8 space-y-4 text-sm">
                  {footerWebsiteLinks.map((i, index) => (
                    <>
                      <Motion>
                        <div key={index} className="flex gap-2 mt-3">
                          <Link
                            to={i.link}
                            className="flex gap-2 no-underline text-black hover:text-blue-700"
                          >
                            <BsSuitDiamondFill className="text-blue-500" />
                            <p className="text-[16px]">{i.item}</p>
                          </Link>
                        </div>
                      </Motion>
                    </>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <Motion>
                  <h2 className="text-[30px]">Contact Us</h2>
                </Motion>

                <ul className="mt-8 space-y-4 text-sm">
                  {footerContactInfo.map((i, index) => (
                    <>
                      <Motion>
                        <div
                          key={index}
                          className="flex gap-2 mt-3 items-center"
                        >
                          <i.icon className="text-blue-800 size-5 shrink-0 " />
                          <p
                            className="text-[16px]"
                            dangerouslySetInnerHTML={{ __html: i.item }}
                          ></p>
                        </div>
                      </Motion>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <Motion>
                <span className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                  &copy; 2024 Iconnect
                </span>
              </Motion>
              <Motion>
                <p className="text-sm text-gray-500">
                  <span className="block sm:inline">All rights reserved.</span>

                  <a
                    className="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                    href="#"
                  >
                    Terms & Conditions
                  </a>

                  <span>&middot;</span>

                  <a
                    className="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </p>
              </Motion>
            </div>
          </div>
          <Motion>
            <div className="mt-5 mb-10 text-[20px] items-center flex">
              <p>
                Developed with 💖 @{" "}
                <a
                  href="https://marcocholla001.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline text-[#000] hover:text-white hover:bg-blue-700 hover:py-1 hover:px-2 rounded-md"
                >
                  <span>MARCOCHOLLA</span>
                </a>
              </p>
            </div>
          </Motion>
        </div>
      </footer>
    </>
    // <div className="w-full flex flex-col mt-1 items-center bg-slate-300">
    //   <div className="flex items-center justify-between w-[70%] mb-10 mt-10">
    //     <div className="flex flex-col gap-2">
    //       <h2 className="text-[30px]">Contact Us</h2>
    //       {footerContactInfo.map((i, index) => (
    //         <>
    //           <div key={index} className="flex gap-2 mt-3">
    //             <i.icon size={25} className="text-blue-800 " />
    //             <p className="text-[16px]">{i.item}</p>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="text-[30px]">My Account</h2>
    //       {footerAccount.map((i, index) => (
    //         <>
    //           <div key={index} className="flex gap-2 mt-3">
    //             <Link
    //               to={i.link}
    //               className="flex gap-2 no-underline text-black hover:text-blue-700"
    //             >
    //               <BsSuitDiamondFill className="text-blue-500" />
    //               <p className="text-[16px]">{i.item}</p>
    //             </Link>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="text-[30px]">Support Link</h2>
    //       {footerSupport.map((i, index) => (
    //         <>
    //           <div key={index} className="flex gap-2 mt-3">
    //             <Link
    //               to={i.link}
    //               className="flex gap-2 no-underline text-black hover:text-blue-700"
    //             >
    //               <BsSuitDiamondFill className="text-blue-500" />
    //               <p className="text-[16px]">{i.item}</p>
    //             </Link>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //     <div className="flex flex-col gap-2">
    //       <h2 className="text-[30px]">Website Link</h2>
    //       {footerWebsiteLinks.map((i, index) => (
    //         <>
    //           <div key={index} className="flex gap-2 mt-3">
    //             <Link
    //               to={i.link}
    //               className="flex gap-2 no-underline text-black hover:text-blue-700"
    //             >
    //               <BsSuitDiamondFill className="text-blue-500" />
    //               <p className="text-[16px]">{i.item}</p>
    //             </Link>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="bg-blue-300 w-full flex flex-col items-center justify-center">
    //     <div className="flex gap-2 flex-col items-center w-full">
    //       <h2 className="text-[30px]">Reach us on</h2>{" "}
    //       {/* Added items-center class */}
    //       <Motion>
    //         {footerSocialLinks.map((i, index) => (
    //           <div className="flex">
    //             <a href={i.link} target="_blank" rel="noreferrer" key={index}>
    //               <i.icon
    //                 size={45}
    //                 className="bg-white ml-3 p-2 rounded-md text-blue-700 mt-5 hover:text-white hover:bg-blue-700 flex"
    //               />
    //             </a>
    //           </div>
    //         ))}
    //       </Motion>
    //     </div>
    //     <Motion>
    //       <p className="mt-10 text-[20px]">
    //         Iconnect © 2024 || All rights reserved
    //       </p>
    //     </Motion>
    //     <Motion>
    //       <p className="mt-5 mb-10 text-[20px]">
    //         Developed with 💖 @{" "}
    //         <a
    //           href="https://marcocholla001.onrender.com/"
    //           target="_blank"
    //           rel="noreferrer"
    //           className="no-underline text-[#000] hover:text-white hover:bg-blue-700 hover:py-1 hover:px-2 rounded-md"
    //         >
    //           <span>MARCOCHOLLA</span>
    //         </a>
    //       </p>
    //     </Motion>
    //   </div>
    // </div>
  );
};

export default Footer;

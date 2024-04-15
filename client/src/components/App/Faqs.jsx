import React from "react";
import Motion from "./motion";
import { Link } from "react-router-dom";
import { FaArrowsAltH } from "react-icons/fa";
import breadcramp from "../../assets/images/breadcrumb-1.webp";

const Faqs = () => {
  return (
    <div>
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
                <h2 className="text-[90px]">FAQs</h2>
              </Motion>
              <Motion>
                <div className="flex items-center gap-3 bg-blue-700 text-white font-semibold rounded-md px-4 py-2 text-[20px]">
                  <Link to={`/`}>Home</Link>
                  <FaArrowsAltH />
                  <Link to={`/faqs`}>FAQs</Link>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

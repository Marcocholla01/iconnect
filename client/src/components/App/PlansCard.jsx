import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Motion from "./motion";
import { motion } from "framer-motion";

const PlansCard = ({ data }) => {
  //   console.log(data);
  return (
    <div className="md:flex flex-wrap lg:flex-row   w-full justify-center gap-6 md:p-0 p-[100px] mb-7">
      {data.map((item, index) => (
        <>
          <Motion>
            <motion.button
              initial={{ opacity: 0.2 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              <div
                key={index}
                className="border-solid-[2px] border-gray-900 bg-white rounded px-2 shadow items-center py-3 md:mt-0 mt-9 cursor-pointer hover:ease-out duration-300 transition"
              >
                <div className="flex-col text-center ">
                  <h3 className="text-blue-700 mt-10">{item.plan}</h3>
                  <p className="p-2 mb-4">{item.user}</p>
                </div>
                <hr />
                <div>
                  <p className="p-1 mt-7 flex gap-2">
                    <BsSuitDiamondFill className="text-blue-500" />{" "}
                    {item.otion1}{" "}
                  </p>
                  <p className="p-1 flex gap-2">
                    <BsSuitDiamondFill className="text-blue-500" />
                    <p dangerouslySetInnerHTML={{ __html: item.otion2 }}></p>
                  </p>
                  <p className="p-1 flex gap-2">
                    <BsSuitDiamondFill className="text-blue-500" />
                    {item.otion3}{" "}
                  </p>
                  <p className="p-1 flex gap-2">
                    <BsSuitDiamondFill className="text-blue-500" />
                    {item.otion4}{" "}
                  </p>
                  <p className="p-1 flex gap-2">
                    <BsSuitDiamondFill className="text-blue-500" />
                    {item.otion5}{" "}
                  </p>
                  <div className="flex items-center justify-center mt-4 ">
                    <p className="text-[#00000096] text-[25px]"> Ksh</p>
                    <h2 className="ml-2 text-[40px] hover:text-blue-800">
                      {item.price.toLocaleString()}{" "}
                    </h2>{" "}
                  </div>
                  <p className="text-center font-serif text-[#00000096]">
                    /month{" "}
                  </p>
                </div>

                <Link to={`/plans`} className="no-underline">
                  <h4 className="bg-slate-200 text-blue-800 font-bold p-3 px-8 rounded-md border-none  hover:text-white hover:bg-blue-800 text-center mt-4 mb-10 self-center">
                    ORDER THIS PLAN
                  </h4>
                </Link>
              </div>
            </motion.button>
          </Motion>
        </>
      ))}
    </div>
  );
};

export default PlansCard;

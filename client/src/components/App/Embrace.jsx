import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Motion from "./motion";

const Embrace = () => {
  const [counter, setCounter] = useState(false);

  const data = [
    {
      id: 1,
      number: 800,
      comment: "Happy Customers",
    },
    {
      id: 2,
      number: 12,
      comment: "Support Services",
    },
    {
      id: 3,
      number: "30",
      comment: "Access points",
    },
    {
      id: 4,
      suport: "24/7",
      comment: "Customer Service",
    },
  ];

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="md:flex flex-col w-full justify-center mt-1 items-center text-center bg-slate-300">
          <Motion>
            <h2 className="text-[30px] mt-10">
              Why <span className="text-blue-700">Embrace</span> Our Network?
            </h2>
          </Motion>
          <div className="md:flex p-4 justify-center gap-10">
            {data.map((item, index) => (
              <>
                <Motion>
                  <div
                    key={index}
                    className="md:flex flex-col  gap-4  border-[2px] border-gray-400 px-8 mb-10 rounded"
                  >
                   
                    <h2 className="text-blue-700 text-[40px] mt-5">
                      {counter && (
                        <CountUp
                          start={0}
                          end={item.number}
                          delay={0}
                          duration={3}
                        />
                      )}
                      +
                    </h2>
                    <p className=" mb-5">{item.comment} </p>
                  </div>
                </Motion>
              </>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Embrace;

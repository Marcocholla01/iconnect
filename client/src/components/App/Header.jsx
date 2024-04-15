import React, { useState } from "react";
import { FaBars, FaCircleUser } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/data.jsx";

const Header = ({ active }) => {
  // const [active, setActive] = useState("Home");
  return (
    <header className="flex w-full z-[9999] fixed  shadow-md ">
      <div className="flex font-Poppins items-center justify-evenly h-[6vh] bg-white w-full">
        <div className="flex text-blue-700 font-bold md:hidden">
          <FaBars size={30} />
        </div>
        <div>
          <NavLink to={`/`} className="no-underline text-blue-700">
            <h4 className="font-bold text-[20px]">Iconnect</h4>
          </NavLink>
        </div>
        <nav className="flex gap-1 items-center">
          {navItems &&
            navItems.map((i, index) => (
              <div key={index} >
                <Link
                  to={i.url}
                  className={`${
                    active === index + 1
                      ? "bg-blue-100  text-blue-700"
                      : "text-[#000000]  "
                  }  px-4 cursor-pointer  font-bold flex font-Poppins items-center  no-underline  rounded-md hover:text-blue-700 p-2`}
                >
                  <div className="flex flex-row items-center">
                    <i.icon size={15} />
                    <p className="ml-1 text-[14px] font-bold">{i.title}</p>
                  </div>
                </Link>
              </div>
            ))}
        </nav>

        <div className="flex  justify-between gap-10 items-center">
          <div className="flex flex-col ">
            <h4 className="font-bold text-end ">Call Now</h4>
            <span className="text-blue-700 font-Poppins text-[15px] font-semibold">
              +254 742 275513
            </span>
          </div>
          <div className="md:flex font-bold">
            <FaCircleUser size={25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

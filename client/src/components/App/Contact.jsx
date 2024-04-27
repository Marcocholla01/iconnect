import React, { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { Link } from "react-router-dom";
import Motion from "./motion";
import breadcramp from "../../assets/images/breadcrumb-1.webp";
import { toast } from "react-toastify";
import { footerContactInfo } from "../../data/data";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error(`Name required`);
      return;
    }
    if (!email) {
      toast.error(`email required`);
      return;
    }
    if (!subject) {
      toast.error(`Subject required`);
      return;
    }
    if (!message) {
      toast.error(`Message required`);
      return;
    }
  };
  return (
    <div className="bg-slate-300">
      <div className="pl-4 pr-4 bg-slate-300">
        <div className="relative">
          <div
            className="h-[60vh]  items-center justify-center flex bg-no-repeat bg-cover    rounded-ee-[100px]  rounded-es-[100px] "
            style={{
              backgroundImage: `url(${breadcramp})`,
            }}
          >
            <div className="absolute flex flex-col gap-2 bg-[#00000065] rounded-ee-[100px]  rounded-es-[100px] top-0 right-0 left-0 h-[60vh]  items-center justify-center text-white">
              <Motion>
                <h2 className="text-[90px]">Contact Us</h2>
              </Motion>
              <Motion>
                <div className="flex items-center gap-3 bg-blue-700 text-white font-semibold rounded-md px-4 py-2 text-[20px]">
                  <Link to={`/`}>Home</Link>
                  <FaArrowsAltH />
                  <Link to={`/contact`}>Contact us</Link>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>

      <main className="py-14 ">
        <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <Motion>
                <h3 className="text-blue-600 font-semibold text-5xl">
                  Contact
                </h3>
              </Motion>
              <Motion>
                <p className="text-black text-3xl font-semibold sm:text-4xl">
                  Let us know how we can help
                </p>
              </Motion>
              <Motion>
                <p>
                  We’re here to help and answer any question you might have, We
                  look forward to hearing from you! Please fill out the form, or
                  us the contact information bellow .
                </p>
              </Motion>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {footerContactInfo.map((i, idx) => (
                    <Motion>
                      <li key={idx} className="flex items-center gap-x-3">
                        <i.icon className="flex-none text-blue-800" />
                        <p dangerouslySetInnerHTML={{ __html: i.item }}></p>
                      </li>
                    </Motion>
                  ))}
                </ul>
              </div>
              <Motion>
                <div className=" flex mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.384416275911!2d34.155893275737405!3d-0.8450100353046274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4bd7f4c163b83%3A0xde1534f2efc8f370!2sSori%20Beach!5e0!3m2!1sen!2ske!4v1714176426980!5m2!1sen!2ske"
                    width="600"
                    height="250"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </Motion>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md bg-white px-10 py-6 rounded-md">
              <Motion>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="font-medium">Full name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Subject</label>
                    <input
                      type="text"
                      placeholder="Enter your subject..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Message</label>
                    <textarea
                      placeholder="Write some message here...."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150">
                    Submit
                  </button>
                </form>
              </Motion>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

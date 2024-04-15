import React from "react";
import Motion from "./motion";
import { footerSocialLinks } from "../../data/data";

const SocialMedia = () => {
  return (
    <div>
      <div className="fixed top-0 left-4 bottom-0 flex flex-col justify-center">
        <Motion>
          {footerSocialLinks.map((i, index) => (
            <div key={index} className="mb-3 mr-6 ml-6">
              <a
                href={i.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-md text-blue-700 hover:text-white hover:bg-blue-700 flex items-center hover:translate-x-3"
              >
                <i.icon size={30} />
              </a>
            </div>
          ))}
        </Motion>
      </div>
    </div>
  );
};

export default SocialMedia;

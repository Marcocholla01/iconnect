import React from "react";
import PlansCard from "./PlansCard";
import PlanOptions from "./PlanOptions";
import Motion from "./motion";

const Plans = () => {
  const dataCard = [
    {
      plan: "Individual Plan",
      user: "For Individual User",
      otion1: "Moderate Web Browsing",
      otion2: "Upto <span>2Mbps</span> Download Speed",
      otion3: "Unlimited Data Usage",
      otion4: "Youtubing and E-Mails",
      otion5: "Basic Attachments",
      price: 1500,
    },
    {
      plan: "Home Plan",
      user: "For Family User",
      otion1: "Free Installation",
      otion2: `Upto <span className="text-blue-700">5Mbps</span> Download Speed`,
      otion3: "Unlimited Data Usage",
      otion4: "Social-Media Browsing",
      otion5: "Continual TV Streaming",
      price: 2500,
    },
    {
      plan: "Business Plan",
      user: "For Businesses",
      otion1: "Fast Web Browsing",
      otion2: "Upto <span>10Mbps</span> Download Speed",
      otion3: "Unlimited Data Usage",
      otion4: "HD Video Streaming",
      otion5: "Clear CCTV Access",
      price: 4500,
    },
    {
      plan: "Premium Plan",
      user: "For Businesses",
      otion1: "Fast File Sharing",
      otion2: "Upto <span> 15Mbps </span> Download Speed",
      otion3: "Unlimited Data Usage",
      otion4: "4K Video Streaming",
      otion5: "Video Confernce",
      price: 7000,
    },
    {
      plan: "Corporate Plan",
      user: "For Corporate User",
      otion1: "Tailored to meet your needs",
      otion2: "Upto <span>100Mbps</span> Download Speed",
      otion3: "Unlimited data Usage",
      otion4: "CCTV& VOIP Access",
      otion5: "Continues Conference Broadcast",
      price: "Inquire",
    },
  ];

  return (
    <div className="w-full bg-slate-300 flex h-auto justify-center">
      <div className="flex flex-col items-center justify-center mt-[100px] w-[100%]">
        <Motion>
          <h2 className="text-center text-black text-[30px]">
            Our <span className="text-blue-800">Monthly </span> Internet Plans
            For <span className="text-blue-800">You</span>.
          </h2>
        </Motion>
        <Motion>
          <p className="mt-3 text-md text-center  mb-10">
            Affordable ISP - The Fast, Reliable , Locally Available Internet
            Service Provider. For Speed of up to 100Mbps, <br /> Connect your
            Business and Home to super-fast internet speeds.
          </p>
        </Motion>
        <PlansCard data={dataCard} />
        <PlanOptions />
      </div>
    </div>
  );
};

export default Plans;

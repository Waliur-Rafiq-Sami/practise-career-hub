import React from "react";
import bannerHeroPic from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero items-end bg-[#8f9efc1e] px-5">
      <div className="hero-content flex-col lg:flex-row-reverse  p-0">
        <img src={bannerHeroPic} className="md:max-w-xl" />
        <div className="">
          <h1 className="text-6xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="sm:pb-10">
            <a className="btn md:h-14 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white md:text-lg">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

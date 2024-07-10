import React from "react";
import backgroundImg from "../../assets/images/bg1.png";

const NavBar = ({ text }) => {
  return (
    <nav className="bg-[#8f9dfc23] relative">
      <div className="text-center pb-20 text-4xl font-extrabold ">
        <img
          className="absolute bottom-0 -z-50 md:w-auto w-48 "
          src={backgroundImg}
        />
        <h1 className="">{text}</h1>
      </div>
    </nav>
  );
};

export default NavBar;

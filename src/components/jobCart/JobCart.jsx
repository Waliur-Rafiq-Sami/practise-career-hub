import React from "react";
import img1 from "../../assets/icons/accounts.png";
import img2 from "../../assets/icons/chip.png";
// import img3 from "../../assets/icons/";
// import img4 from "../../assets/icons/";
// import img5 from "../../assets/icons/";

const JobCart = ({ id, img, name, howMuchJob }) => {
  return (
    <div className="rounded-xl py-9 pl-9 m-2space-y-2 bg-[#e4d6f357]">
      <img
        className="rounded-xl p-4 bg-[#dfc9f859]"
        src={(id % 2 === 1 && img1) || img2}
        alt=""
      />
      <h2 className="pt-5 pb-1 text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{howMuchJob} Jobs Available </p>
    </div>
  );
};

export default JobCart;

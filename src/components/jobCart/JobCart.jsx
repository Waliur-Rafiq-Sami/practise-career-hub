import React from "react";

const JobCart = ({ img, name, howMuchJob }) => {
  return (
    <div className="rounded-xl py-9 pl-9 m-2space-y-2 bg-[#e4d6f357]">
      <img className="rounded-xl p-4 bg-[#dfc9f859]" src={img} alt="" />
      <h2 className="pt-5 pb-1 text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{howMuchJob} Jobs Available </p>
    </div>
  );
};

export default JobCart;

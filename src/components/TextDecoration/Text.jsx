import React from "react";

const Text = ({ jobNameText, jobDefinationText }) => {
  return (
    <div className="text-center md:my-16 my-10 md:space-y-5 space-y-2 px-10">
      <h1 className="md:text-5xl text-3xl font-bold">{jobNameText}</h1>
      <p className="md:text-xl">{jobDefinationText}</p>
    </div>
  );
};

export default Text;

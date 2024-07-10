import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiSubtitlesLight } from "react-icons/pi";
import { MdPhoneForwarded } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { TfiLocationPin } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveOfLocalStorage } from "../LocalSrotage/LocalStorage.js";
import { useState } from "react";
import NavBar from "./../NavBar/NavBar";

const ViewDetails = () => {
  const [ToasT, setToast] = useState(true);
  const { id } = useParams();
  const allJobInfo = useLoaderData();
  const currentJobDetails = allJobInfo.find((job) => job.id === parseInt(id));
  const {
    job_responsibility,
    job_description,
    education_requirements,
    experience,
    salary,
    job_title,
    contact_information,
  } = currentJobDetails;

  const showtoast = (t) => {
    console.log(t);
    t ? toast.success("Applied") : toast.error("Sorry! Already applied");
  };

  const notify = () => {
    saveOfLocalStorage(id, setToast, showtoast);
  };

  return (
    <>
      <NavBar text="job Details"></NavBar>
      <div className="grid md:grid-cols-3 gap-4 container mx-auto my-20 p-2 m-2">
        <div className="md:col-span-2 space-y-5 p-2 m-2 text-justify">
          <p className="text-gray-500">
            <span className="font-bold text-black">Job Description : </span>
            {job_description}
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-black">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <div className="text-gray-500">
            <h4 className="font-bold text-black">
              Educational Requirements :{" "}
            </h4>
            <p>{education_requirements}</p>
          </div>
          <div className="text-gray-500">
            <h4 className="font-bold text-black">Experience : </h4>
            <p>{experience}</p>
          </div>
        </div>
        <div className="p-2 m-2">
          <div className="p-5 rounded-lg bg-[#a47efe18] text-lg space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl font-bold py-3 border-b-[1px] border-blue-200">
                Job Detail
              </h4>
              <p className="flex items-center gap-2">
                <RiMoneyDollarCircleLine className="text-blue-500 text-2xl" />
                <span className="font-bold -mt-1 text-xl">Salary :</span>
                {salary}
              </p>
              <p className="flex items-center gap-2">
                <PiSubtitlesLight className="text-blue-600 text-2xl" />
                <span className="font-bold text-xl">Job Title : </span>
                {job_title}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold py-3 border-b-[1px] border-blue-200">
                Contact information
              </h4>
              <p className="flex items-center gap-2">
                <MdPhoneForwarded className="text-blue-500 text-2xl " />
                <span className="font-bold -mt-1 text-xl">Phone : </span>
                {contact_information.phone}
              </p>
              <p className="flex items-center gap-2">
                <SiMinutemailer className="text-blue-500 text-2xl" />
                <span className="font-bold text-xl">Email : </span>
                {contact_information.email}
              </p>
              <p className="">
                <span className="font-bold text-xl inline-block pr-1">
                  <TfiLocationPin className="text-blue-500 inline-block -mt-1.5 text-2xl" />
                  Address :
                </span>
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="my-5">
            <button
              onClick={notify}
              className="btn md:h-14 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white md:text-lg w-full"
            >
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;

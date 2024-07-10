import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const ApplicationJobCard = ({ job, removeElement }) => {
  const { company_name, job_title, location, salary, logo, id } = job;
  const removeItForLocalStorage = (id) => {
    removeElement(id);
  };
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center p-5">
      <div className="flex flex-col md:flex-row gap-5 justify-between border-2 rounded-xl md:mx-2 mx-5 p-5 xl:w-2/4 md:w-3/4 md:items-center">
        <div className="md:w-2/6">
          <img className="w-full md:h-40 rounded-lg" src={logo} alt="" />
        </div>
        <div className="md:text-base text-xl ">
          <h2 className="card-title font-bold md:text-2xl text-3xl">
            {job_title}
          </h2>
          <p className="text-gray-500">{company_name}</p>
          <div className="space-x-2 my-3">
            <button className="btn bg-transparent border-[#7E90FE] text-base h-10 text-[#7E90FE] hover:bg-gradient-to-r from-[#7E90FE] hover:text-white to-[#9873FF] hover:border-none btn-sm">
              Remote
            </button>
            <button className="btn bg-transparent border-[#7E90FE] text-base h-10 text-[#7E90FE] hover:bg-gradient-to-r from-[#7E90FE] hover:text-white to-[#9873FF] hover:border-none btn-sm">
              Full Time
            </button>
          </div>
          <div className="gap-4">
            <p className="flex items-center">
              <MdOutlineLocationOn className="text-2xl mt-0.5" /> {location}
            </p>
            <p className="flex items-center">
              <HiOutlineCurrencyDollar className="text-2xl" />
              <span className="font-semibold ">Salary : </span>
              {salary}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <NavLink to={`/view-details/${job.id}`}>
            <button className="btn md:h-14 rounded-md btn-sm bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white md:text-lg px-7 hover:opacity-85">
              View Details
            </button>
          </NavLink>
          <button
            onClick={() => removeItForLocalStorage(id)}
            className="btn md:h-14 rounded-md btn-sm bg-gradient-to-r from-[#fe7e7e] to-[#ff73f8] text-white font-bold md:text-xl px-7 hover:opacity-85"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationJobCard;

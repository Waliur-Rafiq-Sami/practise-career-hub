import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const FeaturedJobs = ({ job }) => {
  console.log(job);
  const { company_name, job_title, location, salary, logo } = job;
  console.log(logo);
  return (
    <div>
      <div className="card border-[1px] ">
        <figure className="px-5 pt-5 ">
          <img className=" rounded-lg h-56" src={logo} alt="Shoes" />
        </figure>
        <div className=" py-5 pl-5 pr-1 ">
          <h2 className="card-title font-bold text-2xl ">{job_title}</h2>
          <p className="text-gray-500">{company_name}</p>
          <div className="space-x-2 my-3">
            <button className="btn bg-transparent border-[#7E90FE] text-base h-10 text-[#7E90FE] hover:bg-gradient-to-r from-[#7E90FE] hover:text-white to-[#9873FF] hover:border-none btn-sm">
              Remote
            </button>
            <button className="btn bg-transparent border-[#7E90FE] text-base h-10 text-[#7E90FE] hover:bg-gradient-to-r from-[#7E90FE] hover:text-white to-[#9873FF] hover:border-none btn-sm">
              Full Time
            </button>
          </div>
          <div className="flex gap-4">
            <p className="flex items-center">
              <MdOutlineLocationOn className="text-xl" /> {location}
            </p>
            <p className="flex items-center">
              <HiOutlineCurrencyDollar className="text-xl" />{" "}
              <span className="font-semibold">Salary : </span>
              {salary}
            </p>
          </div>
          <div className="card-actions my-3">
            <button className="btn md:h-12 rounded-md btn-sm bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white md:text-lg px-7 hover:opacity-85">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;

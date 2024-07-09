import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Text from "../TextDecoration/Text";
import JobCart from "./../jobCart/JobCart";
import img1 from "../../assets/icons/accounts.png";
import FeaturedJobsCards from "./../FeaturedJobs/FeaturedJobs";
const jobCategories = [
  {
    id: 1,
    img: { img1 },
    name: "Account & Finance",
    jobsAvailable: 120,
  },
  {
    id: 2,
    img: "../../assets/icons/accounts.png",
    name: "Technology",
    jobsAvailable: 250,
  },
  {
    id: 3,
    img: "e.jpg",
    name: "Healthcare",
    jobsAvailable: 95,
  },
  {
    id: 4,
    img: ".jpg",
    name: "Education",
    jobsAvailable: 60,
  },
  {
    id: 5,
    img: ".jpg",
    name: "Marketing",
    jobsAvailable: 80,
  },
  {
    id: 6,
    img: "ng.jpg",
    name: "Engineering",
    jobsAvailable: 180,
  },
  {
    id: 7,
    img: "",
    name: "Human Resources",
    jobsAvailable: 50,
  },
  {
    id: 8,
    img: "",
    name: "Engineering",
    jobsAvailable: 140,
  },
  {
    id: 9,
    img: "",
    name: "Customer Service",
    jobsAvailable: 110,
  },
  {
    id: 10,
    img: "",
    name: "Legal",
    jobsAvailable: 40,
  },
];

const MainPage = () => {
  const jobCategory = "Job Category List";
  const jobCategoryDefination =
    "Explore thousands of job opportunities with all the information you need. Its your future";
  const FeaturedJobs = "Featured Jobs";
  const FeaturedJobsDetails =
    "Explore thousands of job opportunities with all the information you need. Its your future";
  // data load
  const [jobDatas, setJobData] = useState([]);
  useEffect(() => {
    fetch("fakeJobInformation.json")
      .then((res) => res.json())
      .then((jobs) => setJobData(jobs));
  }, []);

  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto">
        <Text
          jobNameText={jobCategory}
          jobDefinationText={jobCategoryDefination}
        ></Text>
        {/* //job card  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 p-2 -mt-5 mb-10">
          {jobCategories.map((jobCategory) => (
            <JobCart
              key={jobCategory.id}
              id={jobCategory.id}
              img={jobCategory.img}
              name={jobCategory.name}
              howMuchJob={jobCategory.jobsAvailable}
            ></JobCart>
          ))}
        </div>
        <Text
          jobNameText={FeaturedJobs}
          jobDefinationText={FeaturedJobsDetails}
        ></Text>
        {/* Featured Jobs */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2  gap-5 p-2 m-2">
          {jobDatas.map((job) => (
            <FeaturedJobsCards key={job.id} job={job}></FeaturedJobsCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import {
  getValueFromLocalstorage,
  saveOfLocalStorage,
} from "../LocalSrotage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import ApplicationJobCard from "../ApplicationJobCard/ApplicationJobCard";

const AppliedJobs = () => {
  const allJobsDetails = useLoaderData();
  const appliedJobs = getValueFromLocalstorage();

  const [job, setjob] = useState(appliedJobs);

  const removeElement = (id) => {
    const newApplicdJob = appliedJobs.filter((job) => parseInt(job) !== id);
    localStorage.setItem("applied-job", JSON.stringify(newApplicdJob));
    setjob(newApplicdJob);
  };

  const jobs = [];
  job.map((applied) => {
    for (const job of allJobsDetails) {
      if (parseInt(applied) === job.id) {
        jobs.push(job);
        break;
      }
    }
  });
  return (
    <>
      <NavBar text="Applied Jobs"></NavBar>
      <div className="container mx-auto">
        {jobs.map((job, idx) => (
          <ApplicationJobCard
            key={idx}
            job={job}
            removeElement={removeElement}
          ></ApplicationJobCard>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;

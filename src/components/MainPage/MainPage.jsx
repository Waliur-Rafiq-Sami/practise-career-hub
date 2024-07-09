import React from "react";
import Banner from "../Banner/Banner";
import Text from "../TextDecoration/Text";
import JobCart from "./../jobCart/JobCart";
//job cart
import img1 from "../../assets/icons/accounts.png";

const MainPage = () => {
  const jobCategory = "Job Category List";
  const jobCategoryDefination =
    "Explore thousands of job opportunities with all the information you need. Its your future";

  //job cart

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
          <JobCart
            img={img1}
            name={"Account & Finance"}
            howMuchJob={"300"}
          ></JobCart>
          <JobCart
            img={img1}
            name={"Account & Finance"}
            howMuchJob={"300"}
          ></JobCart>
          <JobCart
            img={img1}
            name={"Account & Finance"}
            howMuchJob={"300"}
          ></JobCart>
          <JobCart
            img={img1}
            name={"Account & Finance"}
            howMuchJob={"300"}
          ></JobCart>
        </div>
      </div>
    </>
  );
};

export default MainPage;

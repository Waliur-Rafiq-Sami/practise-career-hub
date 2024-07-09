import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-10">
      <h1 className="text-4xl font-bold">
        status: <span className="text-3xl">{error.status}</span>
      </h1>
      <p>{error.error.message || error.error.stack}</p>
      <Link to="/">
        <button className="btn btn-accent text-xl  my-5">Go Back</button>
      </Link>
    </div>
  );
};

export default Error;

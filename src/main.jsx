import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Error from "./components/Error/Error";
import MainPage from "./components/MainPage/MainPage";
import ViewDetails from "./components/ViewDetailsJob/ViewDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
      {
        path: "/view-details/:id",
        loader: () => fetch("../fakeJobInformation.json"),
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/applied-jobs",
        loader: () => fetch("../fakeJobInformation.json"),
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

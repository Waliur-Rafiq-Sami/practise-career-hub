import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#8f9efc1e]">
      <div className="navbar py-10 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden md:-mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="">Statistics</a>
              </li>
              <li>
                <a>Applied Jobs</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost md:text-4xl text-2xl" to="/">
            CareerHub
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 font-semibold px-1 list-size">
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn md:h-14 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white md:text-lg">
            Star Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

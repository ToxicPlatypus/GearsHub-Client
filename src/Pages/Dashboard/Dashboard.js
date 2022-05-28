import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="mt-10">My Tools</h2>
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            class="btn btn-primary btn-sm top-12 absolute drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard"> DashBoard </Link>
            </li>
            <li>
              <Link to="/dashboard/review"> Review </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

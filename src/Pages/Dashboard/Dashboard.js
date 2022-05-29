import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
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
              <Link to="/dashboard"> My Orders </Link>
            </li>
            <li>
              <Link to="/dashboard/review"> Add a Review </Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile"> My Profile </Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers"> All Users </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

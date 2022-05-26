import React from "react";

const Stats = () => {
  return (
    <div className="text-center mt-8">
      <p className="text-xl lg:text-5xl font-bold uppercase m-2">
        Millions Business Trust Us
      </p>
      <p className=" lg:text-xl font-bold uppercase">
        Try to understand users expectation
      </p>
      <div class="stats stats-vertical lg:stats-horizontal shadow mt-4">
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

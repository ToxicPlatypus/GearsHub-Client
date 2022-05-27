import React from "react";
import join from "../../Assets/Image/join.jpg";

const Community = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={join} alt="" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Join our community now!</h1>
          <p class="py-6">
            Join our community for exicting news and updates and reviews. Keep
            in touch with us now!
          </p>
          <button class="btn btn-primary">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Community;

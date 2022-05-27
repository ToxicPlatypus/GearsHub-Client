import React from "react";
import join from "../../Assets/Image/join.jpg";

const Community = () => {
  return (
    <div class="hero m-4">
      <div class="hero-content flex-col lg:flex-row">
        <img src={join} alt="" class="max-w-sm w-40 rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-xl lg:text-4xl font-bold">Join our community now!</h1>
          <p class="py-2">
            Join our community for exicting news and updates and reviews. Keep
            in touch with us now!
          </p>
          <button class="btn btn-accent btn-sm">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Community;

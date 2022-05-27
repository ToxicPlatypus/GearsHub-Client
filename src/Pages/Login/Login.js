import React from "react";
import google from "../../Assets/Image/search.png";

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl text-center uppercase">login</h1>
      <div class="form-control w-full max-w-xs mx-auto">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="text"
          placeholder="username"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="form-control w-full max-w-xs mx-auto">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-sm my-4 btn-accent flex justify-center items-center mx-auto ">
        Login
      </button>
      <div class="divider mx-20 my-4">OR</div>
      <button className="btn flex btn-primary justify-center items-center mx-auto">
        {" "}
        <span>
          <img className="px-3" src={google} alt="" />
        </span>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;

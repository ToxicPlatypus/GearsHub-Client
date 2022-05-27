import React from "react";
import google from "../../Assets/Image/search.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  if (user) {
    console.log(user);
  }

  if (loading) {
  }

  if (error) {
  }
  return (
    <div>
      <h1 className="text-3xl text-center uppercase">login</h1>

      <div class="form-control w-full max-w-xs mx-auto">
        <span class="label-text mb-2">Email</span>
        <input
          type="email"
          placeholder="email"
          class="input input-bordered w-full max-w-xs"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />
        <label class="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
        </label>
      </div>

      <div class="form-control w-full max-w-xs mx-auto">
        <span class="label-text mb-2">Password</span>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered w-full max-w-xs"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "Must be 6 character",
            },
          })}
        />
        <label class="label">
          {errors.password?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="label-text-alt text-red-500">
              {errors.password.message}
            </span>
          )}
        </label>
      </div>

      <button className="btn btn-sm my-4 btn-accent flex justify-center items-center mx-auto ">
        Login
      </button>
      <div class="divider mx-20 my-4">OR</div>
      <button
        className="btn flex btn-primary justify-center items-center mx-auto"
        onClick={() => signInWithGoogle()}
      >
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

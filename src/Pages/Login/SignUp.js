import React from "react";
import google from "../../Assets/Image/search.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || eUser);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  console.log(eError);

  if (token) {
    navigate("/dashboard");
  }

  if (loading || eLoading || updating) {
    <button class="btn btn-square loading"></button>;
  }

  if (error || eError || updateError) {
    signInError = (
      <p className="text-red-500 ">
        {error?.message || eError?.message || updateError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-3xl text-center uppercase">sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs mx-auto">
          <span class="label-text mb-2">Name</span>
          <input
            type="text"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

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
        {signInError}
        <input
          className="btn btn-accent btn-sm w-full max-w-xs flex items-center justify-center text-center mx-auto"
          type="submit"
          value="SIGNUP"
        />
      </form>
      <p className="text-center m-2">
        Already have an account{" "}
        <Link to="/login" className="text-blue-500">
          {" "}
          Login
        </Link>
      </p>
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

export default SignUp;

import React, { useEffect } from "react";
import google from "../../Assets/Image/search.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useToken from "../../hooks/useToken";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || eUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || eUser) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (loading || eLoading) {
    <Loading></Loading>;
  }
  if (error || eError) {
    signInError = (
      <p className="text-red-500 ">{error?.message || eError?.message}</p>
    );
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <h1 className="text-3xl text-center uppercase">login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          value="LOGIN"
        />
      </form>
      <p className="text-center m-2">
        New Here{" "}
        <Link to="/signUp" className="text-blue-500">
          {" "}
          Create new account.
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
export default Login;

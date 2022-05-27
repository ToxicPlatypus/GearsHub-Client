import React from "react";

const NotFound = () => {
  return (
    <div className="mt-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <p className="text-xl lg:text-5xl text-center mt-4">404 Page Not found</p>
    </div>
  );
};

export default NotFound;

import React from "react";

const MyReview = () => {
  return (
    <div>
      <h2 className="mt-10 text-4xl font-bold">Add a review:</h2>
      <div class="form-control w-72 mb-4">
        <label class="label">
          <span class="label-text">Type your review here:</span>
        </label>
        <textarea class="textarea textarea-bordered h-24 "></textarea>
      </div>
      <button class="btn btn-accent">Submit</button>
    </div>
  );
};

export default MyReview;

import React from "react";
import com from "../../Assets/Image/comment.png";

const Comment = () => {
  return (
    <div class="hero my-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={com} alt="" class="max-w-sm w-40 rounded-lg shadow-2xl" />
        <div className="text-center">
          <h1 class="text-xl lg:text-4xl font-bold py-2">
            Please leave a comment
          </h1>
          <textarea
            class="textarea textarea-bordered"
            placeholder="Text Here"
          ></textarea>
          <br />
          <button class="btn btn-accent btn-sm ">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

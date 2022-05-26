import React from "react";
import face1 from "../../Assets/Image/Faces/face1.jpg";
import face2 from "../../Assets/Image/Faces/face2.jpg";
import face3 from "../../Assets/Image/Faces/face3.jpg";

const Review = () => {
  return (
    <div className="mx-8">
      <p className="text-xl lg:text-5xl uppercase font-bold text-center mt-12">
        User Reviews
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4">
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face1} alt="" />
            </div>
            <div></div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A blandi
            </p>
          </div>
        </div>
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face2} alt="" />
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              repudiandae doloremque fuga adipisci aperiam, ullam eos nostrum
              amet. Delectus, dolores.
            </p>
          </div>
        </div>
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face3} alt="" />
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio optio nisi fuga. Asperiores, neque nihil omnis dolores
              repellendus saepe facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

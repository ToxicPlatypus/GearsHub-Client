import React from "react";
import face1 from "../../Assets/Image/Faces/face1.jpg";
import face2 from "../../Assets/Image/Faces/face2.jpg";
import face3 from "../../Assets/Image/Faces/face3.jpg";

const Review = () => {
  return (
    <div className="mx-8">
      <p className="text-xl lg:text-4xl uppercase font-bold text-center mt-12">
        User Reviews
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8">
        <div>
          <div class="avatar flex justify-center items-center mb-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face1} alt="" />
            </div>
            <div></div>
          </div>
          <div>
            <p className="text-center">
              A useful review includes enough detail to give others a feel for
              what happened. Potential customers want to know more than that
              someone else was happy. They want to know what exactly they liked
              so that they can gauge whether it aligns with their own
              preferences.
            </p>
          </div>
        </div>
        <div>
          <div class="avatar flex justify-center items-center mb-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face2} alt="" />
            </div>
          </div>
          <div>
            <p className="text-center">
              One less-heralded benefit of reviews is the feedback they provide
              you with. Ideally, a review also outlines areas of possible
              improvement. This constructive criticism is not only helpful to
              you. It also gives customers a sense of their “worst-case”
              scenario.
            </p>
          </div>
        </div>
        <div>
          <div class="avatar flex justify-center items-center mb-3">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={face3} alt="" />
            </div>
          </div>
          <div>
            <p className="text-center">
              Marketers use a fancy word for images in reviews: User-generated
              content. If you are not a fan of marketing jargon, it basically
              means that your customers include pictures of your product in
              action or your business’s premise. These “real-life” images
              provide an in-depth and authentic feel to any review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

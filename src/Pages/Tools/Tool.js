import React from "react";
import { Link } from "react-router-dom";
import Purchase from "../Purchase/Purchase";

const Tool = ({ tool }) => {
  const { _id, name, image, description, minimum, available, price } = tool;

  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <figure className="p-5">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl font-bold text-white">{name}</h2>
          <p>{description}</p>
          <p>
            Minimum Orders: <span className="text-white">{minimum}</span>
          </p>
          <p>
            Available: <span className="text-white">{available}</span>
          </p>
          <p>
            Price(per unit): <span className="text-white">{price}</span>
          </p>
          <div class="card-actions">
            <Link to={`/purchase/${_id}`} className="btn btn-primary">
              Buy Now
            </Link>
            {/* <button onClick={<Purchase></Purchase>} className="btn btn-primary">
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;

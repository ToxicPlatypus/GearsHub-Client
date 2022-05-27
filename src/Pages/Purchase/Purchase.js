import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const id = useParams();
  const [singlePart, setSinglePart] = useState({});

  const [number, setNumber] = useState();

  const handleInput = (event) => {
    setNumber(event.target.value);
    console.log("number", number);
  };

  const handleOrder = () => {
    number < minimum || number > available
      ? toast.error(`You can order minimum ${minimum} and maximum ${available}`)
      : toast.success("Success");
  };

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id.id}`)
      .then((res) => res.json())
      .then((data) => setSinglePart(data));
  }, [id]);
  // console.log("single part", singlePart);

  const { _id, name, description, minimum, price, available, image } =
    singlePart;

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">{name}</h1>
          <p>{description}</p>
          <p>Price: {price}</p>
          <p>Available: {available}</p>
          <p>Minimum: {minimum}</p>
          <input
            type="number"
            className="block input input-bordered input-primary w-full max-w-xs"
            placeholder={minimum}
            onChange={handleInput}
          />

          <button onClick={handleOrder} class="btn btn-sm btn-accent mt-3">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

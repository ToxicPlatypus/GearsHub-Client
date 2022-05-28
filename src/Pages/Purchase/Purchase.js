import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const id = useParams();
  const [singlePart, setSinglePart] = useState({});

  const [number, setNumber] = useState();

  const handleInput = (event) => {
    setNumber(event.target.value);
  };

  const handleOrder = (event) => {
    event.preventDefault();

    if (number < minimum || number > available) {
      toast.error(`You can order minimum ${minimum} and maximum ${available}`);
    } else {
      const name = event.target.name.value;
      const email = event.target.email.value;
      const address = event.target.address.value;
      const phone = event.target.name.value;
      const orderDetails = { name, email, address, phone };
      const updatedQuantity = available - number;
      const newQuantity = { updatedQuantity };

      //sending order details to the database
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Order done");

          //updating the available quantity after a order has been placed
          fetch(`http://localhost:5000/service/${id.id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newQuantity),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("available quantity is updated");
            });
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id.id}`)
      .then((res) => res.json())
      .then((data) => setSinglePart(data));
  }, [id, singlePart]);

  const { _id, name, description, minimum, price, available, image } =
    singlePart;

  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold mb-4">{name}</h1>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Available: {available}</p>
            <p>Minimum: {minimum}</p>

            <form
              onSubmit={handleOrder}
              class="shadow-md rounded px-3 pt-3 mb-4"
            >
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="orderQuantity"
                  name="orderQuantity"
                  type="number"
                  placeholder={minimum}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  name="name"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div class="mb-2">
                <input
                  class="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  readOnly
                />
              </div>
              <div class="mb-2">
                <input
                  class="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div class="mb-2">
                <input
                  class="shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  class="btn btn-sm btn-accent my-3"
                  type="submit"
                  value="Order Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div class="w-full max-w-xs">
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

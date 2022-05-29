import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [tools, setTools] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user.email;
  console.log("email", email);
  useEffect(() => {
    fetch(`https://still-dusk-64768.herokuapp.com/myOrder?email=${email}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [user]);
  return (
    <div>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Tool Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Order Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((a, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{a.name}</td>
                  <td>{a.toolName}</td>
                  <td>{a.email}</td>
                  <td>{a.address}</td>
                  <td>{a.phone}</td>
                  <td className="text-center">{a.orderQuantity}</td>
                  <td>{a.sumPrice}</td>
                  <td>
                    <Link to="/payment" className="btn btn-sm btn-accent">
                      Pay Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;

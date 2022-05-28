import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [tools, setTools] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  console.log("email", email);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder?email=${email}`)
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
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Order Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>{tools.length}</p>
      <div className="grid grid-cols-4">
        {tools.map((tool) => (
          <div>
            {" "}
            <h2>Name: {tool.name}</h2>
          </div>
        ))}
        {tools.map((tool) => (
          <div>
            {" "}
            <h2>Email: {tool.email}</h2>
          </div>
        ))}
        {tools.map((tool) => (
          <div>
            {" "}
            <h2>Address: {tool.address}</h2>
          </div>
        ))}

        {tools.map((tool) => (
          <div>
            {" "}
            <h2>Phone: {tool.phone}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;

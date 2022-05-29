import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const makeAdmin = (index) => {
    // console.log(users);
    fetch(
      `https://still-dusk-64768.herokuapp.com/user/admin/${users[index].email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(users),
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Made the user an admin");
        }
      });
  };

  useEffect(() => {
    fetch("https://still-dusk-64768.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold my-4">
        The site have: {users.length} users
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>
                  {users[index].role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(index)}
                      class="btn btn-xs "
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button class="btn btn-xs ">Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

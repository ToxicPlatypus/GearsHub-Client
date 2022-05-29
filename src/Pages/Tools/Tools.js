import React, { useEffect, useState } from "react";
import Tool from "./Tool";
const Tools = () => {
  const [tool, setTool] = useState([]);

  useEffect(() => {
    fetch("https://still-dusk-64768.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setTool(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div>
        <h3 className=" text-4xl text-white font-bold m-4 text-center">
          Available Gears
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-4 mx-auto">
        {tool.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;

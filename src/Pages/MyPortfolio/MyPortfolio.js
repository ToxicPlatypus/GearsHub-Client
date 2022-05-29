import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div class="card w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title font-bold">My Portfolio:</h2>
          <p>
            <span className="font-bold">Name: </span>Mohammad Rafid Rabbi
          </p>
          <p>
            <span className="font-bold">Email: </span>rafidrabbi123@gmail.com
          </p>
          <p>
            <span className="font-bold">Educational Background: </span>BSc
          </p>
          <p>
            <span className="font-bold">Skills: </span>HTML5, CSS3, BootStrap5,
            MaterialUI , Tailwind, JavaScript, ES6, React
          </p>
          <div className="mt-4">
            <h2 class="card-title font-bold">Live Site Link</h2>
            <a
              className="btn btn-sm btn-accent my-2"
              href="https://assignment-11-4cc8b.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              The book Store
            </a>
            <br />
            <a
              className="btn btn-sm btn-accent my-2"
              href="https://photography-assignment.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Photography World
            </a>
            <br />
            <a
              className="btn btn-sm btn-accent my-2"
              href="https://conventioncenter1973.netlify.app/#"
              target="_blank"
              rel="noreferrer"
            >
              Tong Tong
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

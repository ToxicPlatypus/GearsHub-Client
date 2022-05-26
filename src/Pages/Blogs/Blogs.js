import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container text-center mx-auto w-3/4">
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
          </div>
          <div class="collapse-content">
            <p>1. Avoid Anonymous Functions </p>
            <p>2. Avoid Object Literals</p>
            <p>3. Avoid Frequent Mounting/Unmounting</p>
            <p>4. Using reselect selectors</p>
            <p>5. Using Immutable Data Structures</p>
          </div>
        </div>
      </div>

      <div className="container text-center mx-auto w-3/4">
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div class="collapse-content">
            <p className="font-bold">
              There are four main types of state you need to properly manage in
              React apps:
            </p>
            <p>
              <span className="font-semibold">Local state :</span> Local state
              is data we manage in one or another component.
            </p>
            <p>
              <span className="font-semibold">Global state:</span>
              Global state is data we manage across multiple components.
            </p>
            <p>
              <span className="font-semibold">Server state:</span>
              Data that comes from an external server that must be integrated
              with our UI state.
            </p>
            <p>
              <span className="font-semibold">URL state:</span>
              Data that exists on our URLs, including the pathname and query
              parameters.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center mx-auto w-3/4">
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div class="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the Prototype of an object,
              we use Object.getPrototypeOf and Object.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center mx-auto w-3/4">
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </div>
          <div class="collapse-content">
            <p>
              create an empty variable. ( product) Initialize it with 1. In a
              loop traverse through each element (or get each element from user)
              multiply each element to product. Print the product.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center w-3/4">
        <div class="collapse">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            What is a unit test? Why should write unit tests?
          </div>
          <div class="collapse-content ">
            <p>
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system.
            </p>
            <p className="font-bold">Advantages of Unit Testing</p>
            <p>The process becomes agile</p>
            <p>Quality of Code</p>
            <p>Find Software Bugs Easily</p>
            <p>Facilitates Change</p>
            <p>Provides Documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

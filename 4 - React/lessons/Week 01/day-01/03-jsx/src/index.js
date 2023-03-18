import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => {
  // variable that stores a string value
  const language = "React";

  // function that accepts 2 numbers and returns their sum
  const getSum = (num1, num2) => {
    return num1 + num2;
  };

  return (
    <div className="container">
      {/* Jumbotron */}
      <div className="jumbotron">
        {/* JSX can retrieve the value from a variable */}
        <div className="title">Hello, {language}!!</div>

        {/* JSX can evaluate in-line expressions */}
        <div className="sub-title">
          Evaluate in-line expressions: 2 + 3 = {2 + 3}
        </div>

        {/* JSX can execute a function and use the return value */}
        <div className="sub-title">
          Evaluate function executions: {getSum(20, 30)}
        </div>

        {/* JSX can evaluate a ternary operation */}
        <div className="sub-title">
          Evaluate ternary: {Math.random() > 0.5 ? "Hello" : "Goodbye"}
        </div>
      </div>
    </div>
  );
};

// target the div you want to append the elements created using React
const reactContainer = document.getElementById("root");

// use ReactDOM to create a root element which will hold your entire React application
const root = ReactDOM.createRoot(reactContainer);

// render the application in the root element
root.render(<App />);

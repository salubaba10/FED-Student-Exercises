import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// function that creates your React app
const App = () => {
  return (
    <div className="container">
      {/* Jumbotron */}
      <div className="jumbotron">
        {/* title */}
        <div className="title">Hello, React!!</div>
        {/* sub-title */}
        <div className="sub-title">
          This banner element is rendered using React and CSS.
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

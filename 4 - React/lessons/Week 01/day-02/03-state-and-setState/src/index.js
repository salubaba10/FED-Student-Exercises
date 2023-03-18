import React from "react";
import ReactDOM from "react-dom/client";

// import the App component as a named import
import { App } from "./App";

import "./index.css";

// target the div you want to append the elements created using React
const reactContainer = document.getElementById("root");

// use ReactDOM to create a root element which will hold your entire React application
const root = ReactDOM.createRoot(reactContainer);

// render the application in the root element
root.render(<App />);

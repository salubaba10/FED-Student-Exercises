// import useState hook from React
import { useState } from "react";

import { Control } from "./components/Control";
import { Jumbotron } from "./components/Jumbotron";
import { ReposButton } from "./containers/ReposButton";
import { ReposSelect } from "./containers/ReposSelect";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable mode and set the default value as "button"
  const [mode, setMode] = useState("button");

  // event handler function to execute on button click event and destructure the currentTarget from the event object
  const handleClick = ({ currentTarget }) => {
    // the setter function from useState for mode is used to change the state of mode to the name value of the button clicked
    setMode(currentTarget.name);
  };

  // hard-coded list of organisations
  const organisations = ["nodejs", "facebook", "mongodb"];

  return (
    <div className="container">
      <Jumbotron />

      <Control
        // pass the handleClick function as a prop
        handleClick={handleClick}
      />

      {/* use the logical AND (&&) operator to render the ReposButton component if mode is "button" */}
      {mode === "button" && (
        <ReposButton
          // pass the value of organisations as a prop
          organisations={organisations}
        />
      )}

      {/* use the logical AND (&&) operator to render the ReposSelect component if mode is "select" */}
      {mode === "select" && (
        <ReposSelect
          // pass the value of organisations as a prop
          organisations={organisations}
        />
      )}
    </div>
  );
};

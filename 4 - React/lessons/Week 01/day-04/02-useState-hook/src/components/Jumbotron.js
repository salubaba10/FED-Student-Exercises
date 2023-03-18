// import useState hook from React
import { useState } from "react";

export const Jumbotron = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable mode and set the default value as "success"
  const [mode, setMode] = useState("success");

  // event handler function which is executed on the button click event
  const handleButtonClick = () => {
    // the setter function from useState for mode is used to change the state of mode to "danger"
    setMode("danger");
  };

  return (
    <div className="jumbotron">
      {/* title */}
      <div className="title">Hello, React!!</div>

      {/* sub-title */}
      <div className="sub-title">
        This banner element is rendered using React and CSS.
      </div>

      <div className="p-3">
        {/* connect the button onClick event handler to the handleButtonClick function */}
        <button className={`btn btn-${mode}`} onClick={handleButtonClick}>
          Danger Button
        </button>
      </div>
    </div>
  );
};

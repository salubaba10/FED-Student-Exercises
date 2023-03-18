// import useState hook from React
import { useState } from "react";

export const Counter = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable count and set the default value as 0
  const [count, setCount] = useState(0);

  // event handler function which is executed on the increment button click event
  const handleIncrementClick = () => {
    // react batches these operations to all run at once
    // count is 0 so count + 1 = 0 + 1 = 1
    setCount(count + 1);
    // count is 0 so count + 1 = 0 + 1 = 1
    setCount(count + 1);
    // count is 0 so count + 1 = 0 + 1 = 1
    setCount(count + 1);

    // the value of count rendered will be 1 even though we expected to see a value of 3
  };

  // event handler function which is executed on the increment async button click event
  const handleIncrementClickAsync = () => {
    // when we pass a function in to the setter function of the state variable, react follows the full execution of these functions in a synchronous manner thereby updating the count on each execution

    // count is 0 so count + 1 = 0 + 1 = 1; count is updated to 1
    setCount((count) => count + 1);
    // count is 1 so count + 1 = 1 + 1 = 2; count is updated to 2
    setCount((count) => count + 1);
    // count is 2 so count + 1 = 2 + 1 = 3; count is updated to 3
    setCount((count) => count + 1);

    // the value of count rendered will be 3 as we expect unlike the previous where count was still 1
  };

  return (
    <div className="jumbotron">
      {/* title */}
      <div className="title">Async State</div>

      {/* sub-title */}
      <div className="sub-title">Counter: {count}</div>

      <div className="p-3">
        {/* connect the button onClick event handler to the handleIncrementClick function */}
        <button className="btn btn-success" onClick={handleIncrementClick}>
          Increment
        </button>
      </div>

      <div className="p-3">
        {/* connect the button onClick event handler to the handleIncrementClickAsync function */}
        <button className="btn btn-success" onClick={handleIncrementClickAsync}>
          Increment Async
        </button>
      </div>
    </div>
  );
};

// import useState hook from React
import { useState } from "react";

import { Login } from "./components/Login";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable isLoggedIn and set the default value as false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function to execute when login is successful
  const onSuccess = () => {
    // the setter function from useState for isLoggedIn is used to change the state of isLoggedIn to true
    setIsLoggedIn(true);
  };

  // function to execute when login is unsuccessful
  const onFailure = () => {
    // the setter function from useState for isLoggedIn is used to change the state of isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div className="container app">
      {/* use the ternary operator to conditionally render the Login component if isLoggedIn is false OR the Jumbotron component if isLoggedIn is true */}
      {!isLoggedIn ? (
        <Login
          title="Login"
          // pass the onSuccess function as a prop
          onSuccess={onSuccess}
          // pass the onFailure function as a prop
          onFailure={onFailure}
        />
      ) : (
        <Jumbotron
          title="Bob Smith"
          subTitle="Hello, you are now authorised to use the website."
        />
      )}
    </div>
  );
};

// import useState hook from React
import { useState } from "react";

import { FormTitle } from "./FormTitle";

export const Login = ({ title, onSuccess, onFailure }) => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable email and set the default value as ""
  const [email, setEmail] = useState("");

  // declare a state variable password and set the default value as ""
  const [password, setPassword] = useState("");

  // declare a state variable error and set the default value as ""
  const [error, setError] = useState("");

  // event handler function which is executed on the form input change event and destructure the currentTarget from the event object
  const handleChange = ({ currentTarget }) => {
    // check if the currentTarget name is "email"
    if (currentTarget.name === "email") {
      // the setter function from useState for email is used to change the state of email to the value in the input
      setEmail(currentTarget.value);
    }

    // check if the currentTarget name is "password"
    if (currentTarget.name === "password") {
      // the setter function from useState for email is used to change the state of email to the value in the input
      setPassword(currentTarget.value);
    }
  };

  // event handler function which is executed on the form submit event
  const handleSubmit = (event) => {
    // prevent the default submission of the form
    event.preventDefault();

    // check if email or password is falsy
    if (!email || !password) {
      // the setter function from useState for error is used to change the state of error
      setError("Please enter an email and password");

      // execute the onFailure function provided by the App component down as a prop
      onFailure();
    } else if (email === "bob.smith@email.com" && password === "Password123!") {
      // the setter function from useState for error is used to change the state of error to "", clear any previous error
      setError("");

      // execute the onSuccess function provided by the App component down as a prop
      onSuccess();
    } else {
      // the setter function from useState for error is used to change the state of error
      setError("Invalid credentials, please try again.");

      // execute the onFailure function provided by the App component down as a prop
      onFailure();
    }
  };

  return (
    <div className="login">
      {/* title */}
      {/* use the logical AND (&&) operator to render the title div if title is truthy */}
      {title && <FormTitle title={title} />}

      {/* form */}
      {/* connect the form onSubmit event handler to the handleSubmit function */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* email address form input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address"
            // get the value of the email input from the state variable of email
            value={email}
            // connect the onChange event handler to the handleChange function
            onChange={handleChange}
          />
        </div>

        {/* password form input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            // get the value of the password input from the state variable of password
            value={password}
            // connect the onChange event handler to the handleChange function
            onChange={handleChange}
          />
        </div>

        {/* submit button */}
        <div className="d-grid gap-2 col-6 mx-auto pt-4">
          {/* ensure the type of the button is type "submit" for form submission */}
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>

        {/* display error */}
        {/* use the logical AND (&&) operator to render the error div is error is truthy */}
        {error && (
          <div className="text-center pt-4 text-danger">
            {/* retrieve the value of error from the state variable of error */}
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

// import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useApp } from "../context/AppProvider";

export const LoginForm = () => {
  // retrieve the setIsLoggedIn function from the context by using the custom hook useApp
  const { setIsLoggedIn } = useApp();

  // useNavigate is a custom hook from react-router-dom that returns a function that enables us to handle navigation in code
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // event handler function which is executed on the form submit event
  const handleSubmit = (event) => {
    // prevent the default submission of the form
    event.preventDefault();

    if (email === "bob.smith@email.com" && password === "Password123!") {
      // the setter function from useState for isLoggedIn is used to change the state of isLoggedIn to true
      setIsLoggedIn(true);

      // use the navigate function and pass the path as an argument to where you want to navigate to, here we navigate to the dashboard page
      navigate("/dashboard");
    }
  };

  return (
    <Box
      component="form"
      // connect the on submit event handler to handleSubmit
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        sx={{ my: 2 }}
        label="Email"
        value={email}
        // on change set the state value to the value in the text input
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextField
        fullWidth
        sx={{ my: 2 }}
        type="password"
        label="Password"
        value={password}
        // on change set the state value to the value in the text input
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button size="medium" variant="contained" type="submit">
        Login
      </Button>
    </Box>
  );
};

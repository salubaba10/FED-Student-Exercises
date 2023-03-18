// import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useApp } from "../context/AppProvider";

export const Login = () => {
  // retrieve the setIsLoggedIn function from the context by using the custom hook useApp
  const { setIsLoggedIn } = useApp();

  // useNavigate is a custom hook from react-router-dom that returns a function that enables us to handle navigation in code
  const navigate = useNavigate();

  // event handler function for the click event of the login button
  const handleClickLogin = () => {
    // the setter function from useState for isLoggedIn is used to change the state of isLoggedIn to true
    setIsLoggedIn(true);

    // use the navigate function and pass the path as an argument to where you want to navigate to, here we navigate to the dashboard page
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 5,
        margin: 5,
        border: "1px solid black",
      }}
    >
      <Typography variant="h1" gutterBottom>
        Login Page
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is the login page.
      </Typography>
      <Button
        size="medium"
        variant="contained"
        // connect the onClick event to the handleClickLogin function
        onClick={handleClickLogin}
      >
        Login
      </Button>
    </Box>
  );
};

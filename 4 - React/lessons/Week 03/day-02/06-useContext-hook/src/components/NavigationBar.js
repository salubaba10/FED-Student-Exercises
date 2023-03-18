// import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { useApp } from "../context/AppProvider";

export const NavigationBar = () => {
  // useNavigate is a custom hook from react-router-dom that returns a function that enables us to handle navigation in code
  const navigate = useNavigate();

  // retrieve the isLoggedIn and setIsLoggedIn function from the context by using the custom hook useApp
  const { isLoggedIn, setIsLoggedIn } = useApp();

  // event handler function for the click event of the logout button
  const handleClickLogout = () => {
    // the setter function from useState for isLoggedIn is used to change the state of isLoggedIn to false
    setIsLoggedIn(false);

    // use the navigate function and pass the path as an argument to where you want to navigate to, here we navigate to the login page
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { md: "row", sm: "column" },
            justifyContent: { md: "space-between" },
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: { md: "row", sm: "column" } }}
          >
            <Button
              // onClick event navigate to home
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white" }}
            >
              Home
            </Button>
            {/* if isLoggedIn is true then render the Dashboard button */}
            {isLoggedIn && (
              <Button
                // onClick event navigate to dashboard
                onClick={() => navigate("/dashboard")}
                sx={{ my: 2, color: "white" }}
              >
                Dashboard
              </Button>
            )}
          </Box>

          <Box>
            {/* use the ternary operator to conditionally render the login button if isLoggedIn is false OR the logout button if isLoggedIn is true */}
            {!isLoggedIn ? (
              <Button
                // onClick event navigate to login
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "white" }}
              >
                Login
              </Button>
            ) : (
              <Button
                // connect the onClick event to the handleClickLogout function
                onClick={handleClickLogout}
                sx={{ my: 2, color: "white" }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

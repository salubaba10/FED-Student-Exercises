// import Link, useNavigate from react-router-dom
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export const NavigationBar = () => {
  // useNavigate is a custom hook from react-router-dom that returns a function that enables us to handle navigation in code
  const navigate = useNavigate();

  // event handler function for the click event of the logout button
  const handleLogout = () => {
    // use the navigate function and pass the path as an argument to where you want to navigate to, here we navigate to the home page
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* use the Link component from react-router-dom to instruct the navigation to a path is via react-router-dom and not via the native anchor tag of HTML */}

            {/* path matches to / which will render the Home component */}
            <Link to="/" className="nav-link">
              Home
            </Link>

            {/* path matches to /dashboard which will render the Dashboard component */}
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </Nav>
          <Nav className="me-end">
            <Button
              variant="outline-info"
              className="nav-link"
              // connect the onClick event to the handleLogout function
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

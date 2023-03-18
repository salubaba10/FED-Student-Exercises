import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
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

            {/* path matches to /about-us which will render the AboutUs component */}
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>

            {/* path matches to /dashboard which will render the Dashboard component */}
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            {/* path matches to /contact-us which will render the ContactUs component */}
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

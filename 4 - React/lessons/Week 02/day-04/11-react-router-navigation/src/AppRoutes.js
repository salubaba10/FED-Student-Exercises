// import Routes, Route from react-router-dom
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { ContactUs } from "./pages/ContactUs";
import { NoMatch } from "./pages/NoMatch";

// AppRoutes is a custom component which has a routing switch that will conditionally render the corresponding element or component based on the path in the browser's url
export const AppRoutes = () => {
  return (
    <Routes>
      {/* if the path is / then render the Home page component */}
      <Route path="/" element={<Home />} />

      {/* if the path is /about-us then render the AboutUs page component */}
      <Route path="/about-us" element={<AboutUs />} />

      {/* if the path is /dashboard then render the Dashboard page component */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* if the path is /contact-us then render the ContactUs page component */}
      <Route path="/contact-us" element={<ContactUs />} />

      {/* if the path is anything else apart from the above mentioned then render the NoMatch page component */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

// import Routes, Route from react-router-dom
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

// AppRoutes is a custom component which has a routing switch that will conditionally render the corresponding element or component based on the path in the browser's url
export const AppRoutes = () => {
  return (
    <Routes>
      {/* if the path is / then render the Home page component */}
      <Route path="/" element={<Home />} />

      {/* if the path is /login then render the Login page component */}
      <Route path="/login" element={<Login />} />

      {/* if the path is /dashboard then render the Dashboard page component */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

// import Routes, Route from react-router-dom
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { Search } from "./pages/Search";
import { NoMatch } from "./pages/NoMatch";

// AppRoutes is a custom component which has a routing switch that will conditionally render the corresponding element or component based on the path in the browser's url
export const AppRoutes = () => {
  return (
    <Routes>
      {/* if the path is / then render the Home page component */}
      <Route path="/" element={<Home />} />

      {/* if the path is /about-us then render the AboutUs page component */}
      <Route path="/about-us" element={<AboutUs />} />

      {/* if the path is /projects then render the Projects page component */}
      <Route path="/projects" element={<Projects />} />

      {/* if the path is /projects/:projectId then render the Project page component where projectId is a variable that contains the actual project ID */}
      <Route path="/projects/:projectId" element={<Project />} />

      {/* if the path is /search then render the Search page component */}
      <Route path="/search" element={<Search />} />

      {/* if the path is anything else apart from the above mentioned then render the NoMatch page component */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

// import BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  return (
    // this is usually the top most component as it ensures the entire App is browsable
    <BrowserRouter>
      {/* the NavigationBar is outside of the AppRoutes component so it remains consistent across each page */}
      <NavigationBar />

      {/* the AppRoutes component renders the corresponding page based on the browser's url */}
      <AppRoutes />
    </BrowserRouter>
  );
};

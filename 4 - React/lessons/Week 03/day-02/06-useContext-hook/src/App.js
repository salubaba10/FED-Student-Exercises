// import BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationBar";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    // the entire App is wrapped around the Provider which is connected to the AppContext
    <AppProvider>
      {/* this is usually the top most component as it ensures the entire App is browsable */}
      <BrowserRouter>
        {/* the NavigationBar is outside of the AppRoutes component so it remains consistent across each page */}
        <NavigationBar />

        {/* the AppRoutes component renders the corresponding page based on the browser's url */}
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

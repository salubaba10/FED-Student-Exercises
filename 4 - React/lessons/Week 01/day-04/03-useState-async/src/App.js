// import the Counter component as a named import
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="container">
      {/* render the Counter component */}
      <Counter />
    </div>
  );
};

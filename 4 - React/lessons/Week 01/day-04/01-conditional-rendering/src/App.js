// import the Jumbotron component as a named import
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  return (
    <div className="container">
      {/* render the Jumbotron component with title and subTitle props */}
      <Jumbotron
        title="Hello, HTML!!"
        subTitle="This banner element is rendered using only HTML and CSS."
      />

      {/* render the Jumbotron component with only the title prop */}
      <Jumbotron title="Hello, jQuery!!" />

      {/* render the Jumbotron component with title and subTitle props */}
      <Jumbotron
        title="Hello, React!!"
        subTitle="This banner element is rendered using React and CSS."
      />
    </div>
  );
};

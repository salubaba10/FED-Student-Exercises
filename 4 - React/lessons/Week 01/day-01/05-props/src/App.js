// import the Jumbotron component as a named import
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  return (
    <div className="container">
      {/* render the Jumbotron component with props */}
      <Jumbotron
        title="Hello, HTML!!"
        subTitle="This banner element is rendered using only HTML and CSS."
      />

      {/* render the Jumbotron component with props */}
      <Jumbotron
        title="Hello, jQuery!!"
        subTitle="This banner element is rendered using jQuery and CSS."
      />

      {/* render the Jumbotron component with props */}
      <Jumbotron
        title="Hello, React!!"
        subTitle="This banner element is rendered using React and CSS."
      />
    </div>
  );
};

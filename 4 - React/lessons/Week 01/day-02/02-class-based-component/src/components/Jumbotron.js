// named import of the Component class from react
import { Component } from "react";

// create a class that extends the base class of Component from react
export class Jumbotron extends Component {
  // constructor function of the class that accepts the props object
  constructor(props) {
    // call the super function with the props to create the prototypal link to the base class
    super(props);
  }

  // this is a required method which renders the component
  render() {
    // the render MUST return some JSX (component to render)
    return (
      <div className="jumbotron">
        {/* title */}
        <div className="title">Hello, React!!</div>

        {/* sub-title */}
        <div className="sub-title">
          This banner element is rendered using React and CSS.
        </div>
      </div>
    );
  }
}

// named import of the Component class from react
import { Component } from "react";
// import the Jumbotron component as a named import
import { Jumbotron } from "./components/Jumbotron";

// create a class that extends the base class of Component from react
export class App extends Component {
  // constructor function of the class that accepts the props object
  constructor(props) {
    // call the super function with the props to create the prototypal link to the base class
    super(props);

    // set the initial state object in the this object of the class
    // state in this case is an object with the key of isVisible and a boolean value of true as default
    this.state = { isVisible: true };

    // bond the this scope of the handleUnmount method to the this scope of the class
    this.handleUnmount = this.handleUnmount.bind(this);
  }

  // custom method in our component class that is passed down as a prop to the Jumbotron component
  handleUnmount() {
    // use the setState method to change the state value of isVisible to false
    this.setState({ isVisible: false });
  }

  // this is a required method which renders the component
  render() {
    // the render MUST return some JSX (component to render)
    return (
      <div className="container">
        {/* conditional render of the Jumbotron component if the state of isVisible is true else null */}
        {this.state.isVisible ? (
          <Jumbotron
            // pass handleMount as a prop and set the value of the prop as the class's handleUnmount method
            handleUnmount={this.handleUnmount}
          />
        ) : null}
      </div>
    );
  }
}

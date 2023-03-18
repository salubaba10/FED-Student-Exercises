// named import of the Component class from react
import { Component } from "react";

// create a class that extends the base class of Component from react
export class Jumbotron extends Component {
  // constructor function of the class that accepts the props object
  constructor(props) {
    // call the super function with the props to create the prototypal link to the base class
    super(props);

    // set the initial state object in the this object of the class
    // state in this case is an object with the key of mode and a string value of success as default
    this.state = { mode: "success" };

    // bond the this scope of the button handler to the this scope of the class
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // custom method in our component class that is linked to the button click event
  handleButtonClick() {
    // use the setState method to change the state value of mode to dark or light
    this.setState({
      // use a ternary operator to set value as danger if the current state is success
      // or set value as success if the current state is NOT success
      mode: this.state.mode === "success" ? "danger" : "success",
    });
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
        <div className="p-3">
          {/* button responsible for the state change on click */}
          <button
            className={`btn btn-${this.state.mode}`}
            // connect the button's on click event to the handleButtonClick method in this class
            onClick={this.handleButtonClick}
          >
            Toggle Button
          </button>
        </div>
      </div>
    );
  }
}

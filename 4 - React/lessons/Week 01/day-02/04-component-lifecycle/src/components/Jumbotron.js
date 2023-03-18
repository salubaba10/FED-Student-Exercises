// named import of the Component class from react
import { Component } from "react";

// create a class that extends the base class of Component from react
export class Jumbotron extends Component {
  // constructor function of the class that accepts the props object
  constructor(props) {
    // adding a console log to showcase when the constructor is called as part of the component lifecycle
    console.log("constructor");

    // call the super function with the props to create the prototypal link to the base class
    super(props);

    // set the initial state object in the this object of the class
    // state in this case is an object with two keys: mode with a string value of success as default and isVisible with a boolean value of true as default
    this.state = { mode: "success", isVisible: true };

    // bond the this scope of the button handler to the this scope of the class
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // lifecycle method invoked after the component is mounted on the DOM
  componentDidMount() {
    // adding a console log to showcase when the componentDidMount is called as part of the component lifecycle
    console.log("componentDidMount");

    // set a timeout which executes the callback function after 2 seconds
    // the callback function is declared as a custom method of this component's class
    setTimeout(this.handleButtonClick, 2000);
  }

  // lifecycle method invoked before the component is removed from the DOM
  componentWillUnmount() {
    // adding a console log to showcase when the componentWillUnmount is called as part of the component lifecycle
    console.log("componentWillUnmount");
  }

  // lifecycle method invoked before any component update
  // returning true will trigger the re-render in react
  // returning false will not trigger the re-render in react
  shouldComponentUpdate() {
    // adding a console log to showcase when the shouldComponentUpdate is called as part of the component lifecycle
    console.log("shouldComponentUpdate");

    // we are going to manually return true to trigger the re-render in react
    return true;
  }

  // lifecycle method invoked after any component update
  // componentDidUpdate has access to previous props and state
  componentDidUpdate(previousProps, previousState) {
    // adding a console log to showcase when the componentDidUpdate is called as part of the component lifecycle
    console.log("componentDidUpdate");

    // adding a console log to view the previous props
    console.log("previousProps", previousProps);

    // adding a console log to view the previous state
    console.log("previousState", previousState);

    // adding a console log to view the current props
    console.log("currentProps", this.props);

    // adding a console log to view the current state
    console.log("currentState", this.state);
  }

  // custom method in our component class that is linked to the button click event
  handleButtonClick() {
    // use the setState method to change the state value of mode to dark or light
    this.setState((state) => {
      return {
        // use a ternary operator to set value as danger if the current state is success
        // or set value as success if the current state is NOT success
        mode: state.mode === "success" ? "danger" : "success",
      };
    });
  }

  render() {
    // adding a console log to showcase when the render is called as part of the component lifecycle
    console.log("render");

    // if condition to check if the state variable of isVisible is true
    if (this.state.isVisible) {
      // the render MUST return some JSX (component to render)
      return (
        <div className="jumbotron" id="jumbotron">
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

          <div className="p-3">
            {/* button responsible for the state change in App */}
            <button
              className={"btn btn-danger"}
              // connect the button's on click event to the handleUnmount method in the App which is passed down via the props object
              onClick={this.props.handleUnmount}
            >
              Umount Jumbotron
            </button>
          </div>
        </div>
      );
    }

    // the render MUST return null if no JSX is returned
    return null;
  }
}

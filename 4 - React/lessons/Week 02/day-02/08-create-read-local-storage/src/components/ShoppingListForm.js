import { useState } from "react";

export const ShoppingListForm = ({ addItem }) => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable error and set the default value as false
  const [error, setError] = useState(false);

  // declare a state variable label and set the default value as the item's label
  const [label, setLabel] = useState("");

  // event handler function which is executed on the form submit event
  const handleOnSubmit = (event) => {
    // prevent the default submission of the form
    event.preventDefault();

    // check if label is falsy
    if (!label) {
      // the setter function from useState for error is used to change the state of error to true
      setError(true);
    } else {
      // the setter function from useState for error is used to change the state of error to false, clear any previous error
      setError(false);

      // execute the addItem function and pass the label as the argument
      addItem(label);

      // the setter function from useState for label is used to change the state of label to "", reset form input
      setLabel("");
    }
  };

  // event handler function which is executed on the form input change event and destructure the currentTarget from the event object
  const handleOnChange = ({ currentTarget }) => {
    // the setter function from useState for label is used to change the state of label to the value in the input
    setLabel(currentTarget.value);
  };

  return (
    <section className="bg-light text-dark p-4 my-4">
      <h2 className="text-center">Shopping List Form</h2>
      <hr />
      <form
        className="py-2"
        // connect the form onSubmit event handler to the handleOnSubmit function
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3">
          <label htmlFor="item" className="form-label">
            Shopping Item
          </label>
          <input
            className="form-control"
            id="item"
            placeholder="Enter a shopping item..."
            // get the value of the label input from the state variable of label
            value={label}
            // connect the onChange event handler to the handleOnChange function
            onChange={handleOnChange}
          />

          {/* use the logical AND (&&) operator to render the error div is error is truthy */}
          {error && (
            <div className="form-text text-danger">
              Please enter a valid shopping item.
            </div>
          )}
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          {/* ensure the type of the button is type "submit" for form submission */}
          <button className="btn btn-success" type="submit">
            Add to list
          </button>
        </div>
      </form>
    </section>
  );
};

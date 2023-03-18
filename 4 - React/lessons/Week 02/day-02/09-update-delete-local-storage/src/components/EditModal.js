import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const EditModal = ({ handleClose, editItem, show, item }) => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable error and set the default value as false
  const [error, setError] = useState(false);

  // declare a state variable label and set the default value as the item's label
  const [label, setLabel] = useState(item.label);

  // event handler function which is executed on the save button click event
  const handleOnSave = (event) => {
    // check if label is falsy
    if (!label) {
      // the setter function from useState for error is used to change the state of error to true
      setError(true);
    } else {
      // the setter function from useState for error is used to change the state of error to false, clear any previous error
      setError(false);

      // execute the editItem function and pass the new item as the argument
      editItem({ ...item, label });

      // execute the function to close the modal
      handleClose();
    }
  };

  // event handler function which is executed on the form input change event and destructure the currentTarget from the event object
  const handleOnChange = ({ currentTarget }) => {
    // the setter function from useState for label is used to change the state of label to the value in the input
    setLabel(currentTarget.value);
  };

  return (
    <Modal
      // prop to show or hide the modal
      show={show}
      // function to execute on close of the modal
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="py-2">
          <div className="mb-3">
            <label htmlFor="item" className="form-label">
              Shopping Item
            </label>
            <input
              className="form-control"
              id="item"
              placeholder="Enter a shopping item..."
              // pre populate the input value with the item you clicked on from label state variable
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          // connect the onClick event handler to the handleClose function
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          // connect the onClick event handler to the handleOnSave function
          onClick={handleOnSave}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

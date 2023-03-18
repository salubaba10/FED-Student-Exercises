// destructure the handleClick prop value from the prop object
export const Control = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-light"
          name="button"
          // connect the onClick event handler to the handleClick function
          onClick={handleClick}
        >
          Use Buttons
        </button>
        <button
          type="button"
          className="btn btn-light"
          name="select"
          // connect the onClick event handler to the handleClick function
          onClick={handleClick}
        >
          Use Select
        </button>
      </div>
    </div>
  );
};

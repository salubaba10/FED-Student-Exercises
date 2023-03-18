// 3rd party package from https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

// destructure the words prop value from the prop object
export const Words = ({ words }) => {
  // if the words array is empty
  if (words.length === 0) {
    // return a div with an error message
    return (
      <div className="alert alert-primary" role="alert">
        No results!!
      </div>
    );
  }

  // if the words array is not empty return the words as a list
  return (
    <ul className="list-group">
      {words.map((word) => (
        <li
          className="list-group-item"
          // use the uuidv4 function to generate a random uuid value for the key prop
          key={uuidv4()}
        >
          {word}
        </li>
      ))}
    </ul>
  );
};

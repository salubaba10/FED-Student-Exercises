// import useState and useEffect hooks from React
import { useEffect, useState } from "react";

import { Jumbotron } from "./components/Jumbotron";
import { Words } from "./components/Words";

// import the utility function which returns a list of random words
import { getRandomWords } from "./utils/getRandomWords";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable words and set the default value as []
  const [words, setWords] = useState([]);

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies is empty ([]) which means the callback function will only execute once after the component has successfully mounted on the page
  useEffect(
    () => {
      // use the util function to get a list of random words
      const randomWords = getRandomWords();

      // the setter function from useState for words is used to change the state of words to the list of random words
      setWords(randomWords);
    },
    // empty list of dependencies
    []
  );

  return (
    <div className="container">
      <Jumbotron />
      <Words
        // pass the value of words from the state of words
        words={words}
      />
    </div>
  );
};

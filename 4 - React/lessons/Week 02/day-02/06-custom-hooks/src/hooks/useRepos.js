// import useState and useEffect hooks from React
import { useEffect, useState } from "react";

// import 3rd party package https://www.npmjs.com/package/axios
import axios from "axios";

export const useRepos = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable repos and set the default value as undefined
  const [repos, setRepos] = useState();

  // declare a state variable selectedOrg and set the default value as undefined
  const [selectedOrg, setSelectedOrg] = useState();

  // declare a state variable error and set the default value as false
  const [error, setError] = useState(false);

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies contains selectedOrg which means the callback function will every time selectedOrg changes
  useEffect(
    () => {
      // check if selectedOrg is truthy
      if (selectedOrg) {
        // declare a async function to fetch data from an API using the Web API of fetch
        const fetchData = async () => {
          try {
            // use axios get method to make a GET request to an URL for the value of the selectedOrg
            const { data } = await axios.get(
              `https://api.github.com/orgs/${selectedOrg}/repos`
            );

            // the setter function from useState for error is used to change the state of error to false (clear previous error)
            setError(false);

            // the setter function from useState for repos is used to change the state of repos to the data from the API
            setRepos(data);
          } catch (error) {
            console.log(`[ERROR]: Failed to fetch data | ${error.message}`);

            // the setter function from useState for error is used to change the state of error to true=
            setError(true);

            // the setter function from useState for repos is used to change the state of repos to undefined (clear repos)
            setRepos();
          }
        };

        // execute the fetchData function
        fetchData();
      }
    },
    // add selectedOrg to the list of dependencies which will execute the callback function every time something in the list changes
    [selectedOrg]
  );

  // the custom hook will return the values required by other components
  return {
    repos,
    error,
    setSelectedOrg,
  };
};

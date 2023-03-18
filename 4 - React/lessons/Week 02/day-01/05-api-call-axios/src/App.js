// import useState and useEffect hooks from React
import { useEffect, useState } from "react";

// import 3rd party package https://www.npmjs.com/package/axios
import axios from "axios";

import { Jumbotron } from "./components/Jumbotron";
import { Organisations } from "./components/Organisations";
import { Repos } from "./components/Repos";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable repos and set the default value as undefined
  const [repos, setRepos] = useState();

  // declare a state variable selectedOrg and set the default value as undefined
  const [selectedOrg, setSelectedOrg] = useState();

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies contains selectedOrg which means the callback function will every time selectedOrg changes
  useEffect(
    () => {
      // check if selectedOrg is truthy
      if (selectedOrg) {
        // declare a async function to fetch data from an API using the Web API of fetch
        const fetchData = async () => {
          // use axios get method to make a GET request to an URL for the value of the selectedOrg
          const { data } = await axios.get(
            `https://api.github.com/orgs/${selectedOrg}/repos`
          );

          // the setter function from useState for repos is used to change the state of repos to the data from the API
          setRepos(data);
        };

        // execute the fetchData function
        fetchData();
      }
    },
    // add selectedOrg to the list of dependencies which will execute the callback function every time something in the list changes
    [selectedOrg]
  );

  // event handler function to execute on button click event and destructure the currentTarget from the event object
  const handleOrgClick = ({ currentTarget }) => {
    // the setter function from useState for selectedOrg is used to change the state of selectedOrg to the name value of the button clicked
    setSelectedOrg(currentTarget.name);
  };

  // hard-coded list of organisations
  const organisations = ["nodejs", "facebook", "mongodb"];

  return (
    <div className="container">
      <Jumbotron />
      <Organisations
        // pass the value of organisations as a prop
        organisations={organisations}
        // pass the handleOrgClick function as a prop
        handleOrgClick={handleOrgClick}
      />

      {/* use the logical AND (&&) operator to render the Repos component if repos is truthy */}
      {repos && (
        <Repos
          // pass the value of repos from the state of repos
          repos={repos}
        />
      )}
    </div>
  );
};

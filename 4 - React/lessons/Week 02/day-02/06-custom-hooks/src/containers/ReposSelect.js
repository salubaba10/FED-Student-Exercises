import { Select } from "../components/Select";
import { Repos } from "../components/Repos";
import { Error } from "../components/Error";
import { useRepos } from "../hooks/useRepos";

export const ReposSelect = ({ organisations }) => {
  // retrieve the repos, error and setSelectedOrg from the custom hook of useRepos
  const { repos, error, setSelectedOrg } = useRepos();

  // event handler function to execute on change event and destructure the currentTarget from the event object
  const handleChange = ({ currentTarget }) => {
    // the setter function from useRepos for selectedOrg is used to change the state of selectedOrg to the name value of the button clicked
    setSelectedOrg(currentTarget.value);
  };

  return (
    <div className="container">
      <Select
        // pass the value of organisations as a prop
        organisations={organisations}
        // pass the handleChange function as a prop
        handleChange={handleChange}
      />

      {/* use the logical AND (&&) operator to render the Error component if error is truthy */}
      {error && <Error />}

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

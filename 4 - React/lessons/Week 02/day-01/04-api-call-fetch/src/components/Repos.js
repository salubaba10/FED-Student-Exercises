// destructure the repos prop value from the prop object
export const Repos = ({ repos }) => {
  // if the repos array is empty
  if (repos.length === 0) {
    // return a div with an error message
    return (
      <div className="alert alert-primary" role="alert">
        No repositories found!!
      </div>
    );
  }

  // if the repos array is not empty return the repos as a list
  return (
    <ul className="list-group">
      {repos.map((repo) => (
        <li
          className="list-group-item"
          // use the repo id as the key prop
          key={repo.id}
        >
          <a
            // extract the html_url from each repo
            href={repo.html_url}
            className="link-primary"
            target="_blank"
            rel="noreferrer"
          >
            {/* render the repo name */}
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

# GitHub Search Application

## User Story

>As a user, I should be able to search for information using the GitHub API.

## Acceptance Criteria

- The user is presented with a form that has 2 buttons
  - `Search by organisation`
  - `Search by username`
- The User is presented with a text input to enter an `organisation name` or a `username` depending on which button they have clicked on
- When the user clicks on the `Submit` button the user is presented with a list of repositories
- When the user submits an empty form the user is presented with an error message `Please enter a valid organisation` if the user has selected `Search by organisation`
- When the user submits an empty form the user is presented with an error message `Please enter a valid username` if the user has selected `Search by username`
- Use the link `https://api.github.com/orgs/{organisationName}/repos` for a search by organisation name
- Use the link `https://api.github.com/users/{username}/repos` for a search by username name
- If the user selects `Search by organisation` then the placeholder label should read "Enter organisation"
- If the user selects `Search by username` then the placeholder label should read "Enter username"
- Repositories should be presented as many cards keeping in mind responsive layouts
- Each repository must be presented as a card with the following information:
  - `Repo name`
  - `Repo URL`
  - `Description`
  - `User avatar`
- If the number of repositories returned from the API is 0 then the user should be presented with an alert `"No repositories found."`

## Design Guide

![desktop design guide](desktop-design.png)

![mobile design guide](mobile-design.png)

## Getting Started

Navigate to your `coding_bootcamp` workspace:

```sh
cd ~/coding_bootcamp
```

Create a repository in [GitHub](https://github.com/new) and enter a `Repository Name` with kebab-case[?](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#kebab-case) and choose `Node` for your `.gitignore template`.

Clone the repo you just created with the SSH link:

```sh
git clone git@github.com:YOUR_GITHUB_USERNAME/your-app-name.git
```

Navigate into your repo folder and create your react project using the `create-react-app` script:

```sh
cd your-react-app
npx create-react-app .
# Don't forget the full stop!
```

Once you've done this run the following commands to add the new files to your repo and push the starter template.

```sh
git add .             # adds all the new files in the current folder
git commit -am "init" # commits the new files with the message "init"
git push              # pushes the latest commit
```

Once you refresh your GitHub page on the web browser you will see all your local files in GitHub.

You can now proceed to work locally, `add`, `commit` and `push` code regularly during development.

## Resources

- CSS framework: [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Colour palette: [coolors](https://coolors.co/)
- Icons: [font-awesome icons](https://fontawesome.com/icons) | [CDN](https://cdnjs.com/libraries/font-awesome)
- [React docs](https://beta.reactjs.org/)

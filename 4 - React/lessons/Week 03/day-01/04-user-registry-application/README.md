# User Registry Application

## User Story

As an admin user I would like to add details of users to an internal user registry.

## Acceptance Criteria

> User should be presented with a list of users from the registry (local storage) on load of the application.

> User should also be presented with the Add User Form on load.

> The Add User Form should have the following fields:

- Title (required with the following options: Mr, Mrs, Ms, Dr)
- First Name (required)
- Last Name (required)
- Gender (required as radio options Male Female, Male is the default option)
- Age (required)
- Email Address (required)
- Profile Image URL (required)
- LinkedIn Profile URL (optional)
- GitHub Profile URL (optional)
- Short Bio (optional)

> Add user form should have validation and should display error messages when a required field is incomplete

> Upon successfully completing the form and on submit of the form the user details should be stored in local storage and the user is presented with a success modal "User successfully saved in registry."

> Each user card should have all the user information presented.

> Each user card should also have a button to remove that specific user from the registry

> If the user clicks on delete the user, they are presented with a confirmation modal with text "Are you sure you want to delete this user?" and button "Yes" and "No"

> If the user clicks on "No" no change is applied and the delete user modal closes

> If the user clicks on "Yes" the user is removed from local storage and the user is removed from the list of users on the page and the delete user modal closes

## Design Guide

Coming soon...

## Getting Started

1. > Navigate to your `coding_bootcamp` workspace:

```
cd ~/coding_bootcamp
```

2. > Create a react project using the `create-react-app` script and use your own app name:

```
npx create-react-app your-app-name
cd your-react-app
```

3. > Create a repository in [GitHub](https://github.com/new) and enter the "Repository name" as the same name as your react app.

4. > In the terminal within your react app enter the commands provided by GitHub. The first command points your local repository to the remote GitHub, the second command sets your branch as `main` and the last command pushes all your local changes to the remote repository

```
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/your-app-name.git
git branch -M main
git push -u origin main
```

5. > Once you refresh your GitHub page on the web browser you will see all your local files in GitHub.

6. > You can now proceed to work locally and add commit and push code regularly during development

## Resources

- CSS framework: [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Colour palette: [coolors](https://coolors.co/)
- Icons: [font-awesome icons](https://fontawesome.com/icons) | [CDN](https://cdnjs.com/libraries/font-awesome)
- [React docs](https://beta.reactjs.org/)

# Weather Dashboard

## User Story

As a user I would like to know the current weather information about a city and also the next 5 day weather forecast.

## Acceptance Criteria

> User should be presented with a title to the application "Weather Dashboard"

> User should be presented with a form to enter city name

> When the user submits the form with a valid city name then the current weather information is presented along with the 5-day forecast information

> The current weather information for a city should include the following:

- City name
- Temperature
- Humidity
- Wind Speed
- Pressure
- Image icon of the weather (eg. cloudy icon, sunny icon, etc. `http://openweathermap.org/img/w/<ICON_CODE>.png`)
- UV Index (color coded based on the value see [link](https://en.wikipedia.org/wiki/Ultraviolet_index))

> The 5-day forecast weather information for a city should be presented as multiple cards with each weather card containing information as follows:

- Temperature
- Humidity
- Wind Speed
- Pressure
- Image icon of the weather (eg. cloudy icon, sunny icon, etc. `http://openweathermap.org/img/w/<ICON_CODE>.png`)

> Whenever a user searches for a city the city is added to local storage as recent cities which is displayed on the page

> When a user clicks on a recent city the user should be presented with the current weather information and the 5-day forecast for the city

> User should also be presented with a button to clear recent cities which will clear all the recent cities from the application and local storage

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

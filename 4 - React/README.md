# React Training

## Pre-requisites

### Create A Project Workspace

This workspace is a folder that will contain multiple `projects/repositories`.

You will always navigate to this folder in your `Terminal` when you start class.

If you want to create a **new project** you will do that in this workspace.

**DO NOT** create projects outside this folder as it is good to keep all your projects organised within a dedicated workspace.

```sh
cd ~
mkdir coding_bootcamp
cd coding_bootcamp
```

#### `cd`

will change the directory to your home directory (Windows/MAC home directory)

#### `mkdir coding_bootcamp`

will make a directory (folder) called _coding_bootcamp_ in your home directory since you are currently in your home directory because of the previous command

#### `cd coding_bootcamp`

will change the directory to the newly created directory _coding_bootcamp_ since you created the directory in the previous command

---

### Setup your SSH Keys

If you do not have your SSH keys setup for GitHub please follow the [GITHUB_SSH_SETUP.md](docs/GITHUB_SSH_SETUP.md) guide in the `docs` folder

---

### NodeJS Installation

Run the command `node --version` in your terminal and if a valid node version is displayed you can skip this step.

If you do not have NodeJS setup on your machine please follow the [NODEJS_INSTALLATION_GUIDE.md](docs/NODEJS_INSTALLATION_GUIDE.md) guide in the `docs` folder

## Getting Started

Install the dependencies for the react playground and run the playground. Please note that `npm run init` is a custom script that installs all the dependencies required by React in the `playground` directory.

```sh
npm run init
npm run playground
```

You should see a webpage open in your default browser on `http://localhost:3000/` that says "Welcome to the React Playground"

## Running the playground

- Replace the `/src` directory in the `/playground` folder with the `/src` directory from either the challenges or the concepts (depending on what you want to run in the playground)
- Open your terminal and make sure you are in the root directory of the react-training project (entry directory of this repository)
- Run the following command in the terminal `npm run playground` and you should see your React application open in `http://localhost:3000/`
- If you want to stop the playground, in the terminal press (CTRL + C)

## Course Curriculum

> You can find the lesson plans [here](./LESSON_PLANS.md)
>
> You can find your final project specifications [here](./PROJECT_SPECIFICATIONS.md)

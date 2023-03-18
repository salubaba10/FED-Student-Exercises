# Coding Bootcamp Solution

## Getting Started

### 1. Create Project Workspace

This workspace is a folder which will contain multiple **projects/repositories**.

You will always navigate to this folder in your **terminal** when you start class.

If you want to create a new project you will do that in this workspace.

**DO NOT** create projects outside this folder as it is good to keep all your projects organised within a dedicated workspace.

```sh
cd
mkdir coding_bootcamp
cd coding_bootcamp
```

- `cd` will change the directory to your home directory (Windows/MAC home directory)
- `mkdir coding_bootcamp` will make a directory (folder) called _coding_bootcamp_ in your home directory since you are currently in your home directory because of the previous command
- `cd coding_bootcamp` will change the directory to the newly created directory _coding_bootcamp_ since you created the directory in the previous command

---

### 2. Setup your SSH Keys

If you do not have your SSH keys setup for GitHub please follow the [GITHUB_SSH_SETUP.md](./GITHUB_SSH_SETUP.md) guide

---

### 3. Instructor Repository Setup

#### Step 1

Navigate to your project workspace

```sh
cd ~/coding_bootcamp
```

The above command will take you to your home directory and then navigate to the _coding-bootcamp_ directory irrespective of which directory you are currently in.

#### Step 2

Clone the instructor repository on to your local machine

```sh
git clone git@birmingham.bootcampcontent.com:university-of-birmingham/UBHM-BRM-FSF-PT-06-2022-U-C.git instructor
cd instructor
code .
```

- The above git command will clone the project from git using the _ssh link_ provided and rename the cloned project on your local machine to **instructor**
- `cd instructor` will navigate in to the newly cloned git project
- `code .` will open the project in _Visual Studio Code_

**NOTE:** If `code .` does not work please follow the instructions [here](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

---

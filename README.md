# PB - COURSE NAME HERE

COURSE/REPO DESCRIPTION.

## Folder Structure

- Lessons must be split into subject and then by session
- Session folders have the subject of the lesson as the folder name
- Numbering ensures lesson order to follow a logical cannon and sorting in file explorers (Finder, Windows File Explorer, GitHub Repo etc...)
- you can replace this README.md and any files

## **REQUIRED** for sharepoint sync

**you MUST add the sharepoint url to the repo variables as `SITEURL` for help see this [guide](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository)**

The URL will look like this:

```sh
# there should be nothing after the sharepoint name
https://purplebeardltd.sharepoint.com/sites/SHAREPOINTNAME 
```

## Folder naming

To make this as simple as possible below are examples of how to structure your lesson folders, please stick to this structure as this ensures a clean folder structure and uniformity across courses.

```sh
# structure example
/README.md                # this file that you are reading
/module/README.md         # add a README.md for each module
/module/lesson/README.md  # add a README.md for each lesson too

# Simple lessons
/X - MODULE/FILES.EXT
/X - MODULE/X.XX - TOPIC/FILES.EXT

# Complex lessons
/X - MODULE/X.XX - TOPIC/X.XX.X - SUB-TOPIC/FILE.EXT
/X - MODULE/X.XX - TOPIC/X.XX.X - SUB-TOPIC/FILE.EXT

```

### Examples of Folder Naming

```sh
# Simple Example
/1 - HTML/README.md
/1 - HTML/1.01 - Typography, Links and Images/README.md
/1 - HTML/1.01 - Typography, Links and Images/index.html

# Complex Example (sub-modules)
/3 - JS/3.10 - The DOM/3.10.1 - Traversing the DOM/app.js
/3 - JS/3.10 - The DOM/3.10.2 - Event Listeners 1/app.js
/3 - JS/3.10 - The DOM/3.10.3 - Event Listeners 2/app.js

```

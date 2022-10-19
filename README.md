# Notes App

A Backend application built using Node.js and JavaScript to make notes and the data stores in a JSON file.
The application has the following features:

1. Adding the notes.
2. Removing the existing note.
3. Listing all the titles that are present in the application.
4. Reads a specific note, title and body, by providing the title in the command.

Used various packages of npm like chalk, yargs, nodemon.

1. Chalk: To specify a success or error message by defining the colour, for success message, green and for the error, red.
2. Yargs: To build various commands and their description.
3. Nodemon: To make the changes in the run-time of application.

## Commands

To add a note run

```bash
  node app.js add --title="TITLE" --body="BODY"
```
To remove a note run

```bash
  node app.js remove --title="TITLE" --body="BODY"
```
To list notes run

```bash
  node app.js list
```
To read a note run

```bash
  node app.js read --title="TITLE"
```

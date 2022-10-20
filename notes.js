const { default: chalk } = require('chalk')
const fs = require('fs')

//adding the new note, command: add

const addNote = (title, body) => {
    const notes= loadNotes()
    //checks for any duplicate note before adding
    const duplicateNote = notes.find((note) => note.title === title)

    //debugger//degugs the app at this point--> command: node inspect app.js add --title="" --body=""
    
    //condition if-->note is note present then do this
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)        
        console.log(chalk.green.inverse('New Title is Added!'))
    }
    //if not present then throw this -----
    //                                   |
    else(                      //        |
        console.log(chalk.inverse.red('Title is taken!'))
    )

}

//removing the note, command: remove

const removeNote = (title) => {
    const notes = loadNotes()
    //filters the note to be removed
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function(note) {
    //     return note.title !== title
    // })

    //saves the note after removing by calling the function save notes
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }

    //if no note is present then perform this
    else{
        console.log(chalk.red.inverse('No note Found!'))
    }
    
}

//listing the note, command: list

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    })
}

//reading the note, command: read

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } 
    else {
        console.log(chalk.inverse.red('Note not found!'))  
    }
}

//saving the note after adding or removing

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//loading the notes to perform in a function

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    } 
}

//exporting the function to app.js

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

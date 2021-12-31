
import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const notesService = {
    query,
    removeNote,
    updateNote,
    addNote,
    getNoteById,
}

const KEY = 'NotesDB'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "don't forget to call the resturant and ask about friday"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://www.regamatok-elite.co.il/wp-content/uploads/2021/05/%D7%A9%D7%9C%D7%91%D7%99%D7%9D-2.jpg",
            title: "Cake recipe"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "groceries",
            todos: [
                { txt: "milk", doneAt: null },
                { txt: "bananas", doneAt: 187111111 },
                { txt: "cofee", doneAt: 187111111 },
                { txt: "suger", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n104",
        type: "note-video",
        info: {
            url: "BapcpzI-7l8",
            title: "good song for my wedding"
        },
        style: {
            backgroundColor: "#00d"
        }
    }

];

_saveNotesToStorage(gNotes);

function query(filterBy) {
    const notes = _loadNotesFromStorage()
    if (!filterBy) {
        return Promise.resolve(gNotes)
    }
    const filteredNotes = _getFilteredNotes(notes, filterBy)
    return Promise.resolve(filteredNotes)

}

function _getFilteredNotes(notes, filterBy) {
    if (filterBy === 'all') return notes
    return notes.filter(note => {
        return note.type.includes(filterBy)
    })
}




function addNote(type, info) {
    var notes = _loadNotesFromStorage()
    var note = _createNote(type, info)
    notes = [note, ...notes]
    _saveNotesToStorage(notes);
    return Promise.resolve(note)
}

function removeNote(noteId) {
    let notes = _loadNotesFromStorage()
    notes = notes.filter(note => note.id != noteId)
    _saveNotesToStorage(notes);

}

function _createNote(type, info) {
    return {
        id: utilService.makeId(),
        type: type,
        isPinned: true,
        info
    }
}

function getNoteById(noteId) {
    const notes = _loadNotesFromStorage()
    var note = notes.find(function (note) {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

function updateNote(noteId, newNote) {
    const notes = _loadNotesFromStorage()
    var noteIdx = notes.findIndex(function (note) {
        return note.id === noteId;
    })
    notes[noteIdx] = newNote;
    _saveNotesToStorage(notes);
    return Promise.resolve()
}


function _saveNotesToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(KEY)
}
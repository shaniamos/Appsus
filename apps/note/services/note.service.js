import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const KEY = 'notesDB'
export const NoteService = {
    query,
    save,
    remove,
    getById,
}

function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }

    if (filterBy) {
        let { vendor, minSpeed, maxSpeed } = filterBy
        if (!minSpeed) minSpeed = 0;
        if (!maxSpeed) maxSpeed = Infinity
        notes = notes.filter(note => (
            note.vendor.includes(vendor) &&
            note.speed >= minSpeed &&
            note.speed <= maxSpeed
        ))
    }
    return Promise.resolve(notes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function remove(noteId) {
    // return Promise.reject('Not now!!!')
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function save(note) {
    if (note.id) return _update(note)
    else return _add(note)
}

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveToStorage(notes)
    return Promise.resolve(noteToUpdate)
}

function _add({ type, isPinned, info }) {
    let notes = _loadFromStorage()
    const note = _createNote(type, isPinned, info)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(note)
}

function _createNotes() {
    const notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                title: "My Bad Habits",
                txt:
                    `Watching too much Youtube,
Watching too much movies,
Wasting a lot of time
watching new`
            },
            style: {
                backgroundColor: "#FBBC05"
            }
        },
        {
            id: "n102",
            type: "note-txt",
            isPinned: true,
            info: {
                url: "http://ca-upload.com/here/img/630a1918bb9f2.jpg",
                title: "To Live Longer!",
                txt: `
Have plenty of sleep,
Don't take stress,
intermittent Fasting,
Very low sugar intake,
Exercise`
            },
            style: {
                backgroundColor: "#4285F4"
            }
        },
        {
            id: "n103",
            type: "note-img",
            info: {
                url: "http://coding-academy.org/books-photos/16.jpg",
                title: "Bobi and Me",
                txt: "Sent photos from the Zoo"
            },
            style: {
                backgroundColor: "#FFFFFF"
            }
        },
        {
            id: "n104",
            type: "note-todos",
            info: {
                title: "TODO LIST",
                todos: [
                    { txt: "Discuss new project with team", doneAt: null },
                    { txt: "Write a blog about new trends", doneAt: 187111111 },
                    { txt: "Coding power", doneAt: 187111111 },
                ]
            }
        },
        {
            id: "n108",
            type: "note-todos",
            info: {
                url: "http://ca-upload.com/here/img/630a1803b8eb6.jpg",
                title: "Taking care of my dog",
                todos: [
                    { txt: "always keep fresh water available", doneAt: null },
                    { txt: "provide ample opportunities to exercise", doneAt: 187111111 },
                    { txt: "practive reproductive control", doneAt: 187111111 },
                    { txt: "dental care is very important", doneAt: 187111111 },
                ]
            },
            style: {
                backgroundColor: "#DB4437"
            }
        },
        {
            id: "n105",
            type: "note-txt",
            isPinned: true,
            info: {
                title: "Language Arts Assignment for Friday, September 23",
                txt: "write an essay!"
            }
        },
        {
            id: "n106",
            type: "note-txt",
            isPinned: true,
            info: {
                title: "Call my grandma",
            },
            style: {
                backgroundColor: "#E74335"
            }
        },
        {
            id: "n107",
            type: "note-todos",
            info: {
                url: "http://coding-academy.org/books-photos/14.jpg",
                title: "Read a book",
                todos: [
                    { txt: "The Secret Pulse of Time", doneAt: null },
                    { txt: "Stolen Focus", doneAt: null },
                    { txt: "Seveneves", doneAt: null },
                ],
            },
            style: {
                backgroundColor: "#439854"
            }
        },
    ]
    // const notes = []
    // for (let i = 0; i < 20; i++) {
    //     const vendor = gVendors[utilService.getRandomIntInclusive(0, gVendors.length - 1)]
    //     notes.push(_createCar(vendor))
    // }
    return notes
}

function _createNote(type, isPinned, info) {
    return {
        id: utilService.makeId(),
        type,
        isPinned,
        info,
    }
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}



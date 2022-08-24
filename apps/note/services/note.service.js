import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const NoteService = {
    query,
    save,
}

const KEY = 'notesDB'

function save(note) {
    if (note.id) return _update(note)
    else return _add(note)
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

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveToStorage(notes)
    return Promise.resolve(noteToUpdate)
}

function _add({ vendor, speed }) {
    let notes = _loadFromStorage()
    const note = _createNote(vendor, speed)
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
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        },
        {
            id: "n104",
            type: "note-txt",
            isPinned: true,
            info: {
                title: "Titelooo",
                txt: "Fullstack Me Baby!"
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

function _createNote(vendor, speed = utilService.getRandomIntInclusive(1, 200)) {
    return {
        id: utilService.makeId(),
        vendor,
        speed,
        desc: utilService.makeLorem()
    }
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}



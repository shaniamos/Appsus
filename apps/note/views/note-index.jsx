import { NoteList } from "../cmps/note-list.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"
import { NoteService } from "../services/note.service.js"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink, Link } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        labels: [],
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query(this.state.filterBy)
            .then(notes => this.setState({ notes }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
        // showSuccessMsg('Filtered Notes')
    }

    onRemoveNote = (noteId) => {
        NoteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes, isBounce: true })
                // showSuccessMsg('Car removed')
            })
            .catch(err => {
                console.log('Problem!!', err)
                // showErrorMsg('Cannot remove car')
            })
    }


    render() {
        const { notes } = this.state
        const { onRemoveNote, loadNotes } = this
        return <section className="note-index main-layout ">
            
            <div className="note-side-nav flex column">
                <a className="notes" href="">Notes</a>
                <a className="notes" href="">Reminder</a>
                <a className="notes" href="">Edit labels</a>
                <a className="notes" href="">Archive</a>
                <a className="notes" href="">Bin</a>
            </div>
            <div className="note-content">
                <div className="note-create">
                    <p> Take a note...</p>
                    <div className="btns-create">
                        <button className="btn-create-list" data-tooltip-text="NewList" tabIndex="1">
                            <i className="fa-regular fa-square-check"></i>
                        </button>
                        <button className="btn-create-draw" data-tooltip-text="NewNoteWithDrawing" tabIndex="1">
                            <i className="fa-solid fa-paintbrush"></i>
                        </button>
                        <button className="btn-create-image" data-tooltip-text="NewNoteWithImage" tabIndex="1">
                            <i className="fa-regular fa-image"></i>
                        </button>
                    </div>
                </div>
                <NoteEdit loadNotes={loadNotes}/>
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </div>
        </section>

    }
}

/*
new list 
<i class="fa-regular fa-square-check"></i>

new note with drawing 
<i class="fa-solid fa-paintbrush"></i>

add image
<i class="fa-regular fa-image"></i>

*/
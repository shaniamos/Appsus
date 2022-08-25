import { NoteNav } from "../cmps/note-nav.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"
import { NoteService } from "../services/note.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';


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
        showSuccessMsg('Filtered Notes')
    }

    onRemoveNote = (ev, noteId) => {
        ev.preventDefault()
        NoteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes })
                showSuccessMsg('Note removed')
            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot remove note')
            })
    }

    onUpdateNote = (noteId) => {
        NoteService.update(noteId)
            .then(() => {
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes })
                showSuccessMsg('Note Updated!')
            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot update note')
            })
    }

    render() {
        const { notes } = this.state
        const { onRemoveNote, loadNotes } = this

        return <section className="note-index main-layout ">
            {/* <NoteNav /> */}
            <div className="note-content">
                <Link to="/note/edit">
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
                </Link>
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </div>
            <section>
                {/* <NoteEdit loadNotes={loadNotes} /> */}
                <Route exact path="/note/edit/:noteId?" render={(props) => <NoteEdit loadNotes={loadNotes} {...props} /> } />

                {/* <Route path="/note/edit/:noteId?" component={NoteEdit} /> */}
            </section>
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
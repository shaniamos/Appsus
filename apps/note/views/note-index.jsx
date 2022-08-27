import { NoteList } from "../cmps/note-list.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"
import { NoteService } from "../services/note.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';

const { Route, Link } = ReactRouterDOM

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
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes })
                showSuccessMsg('Note binned')
            })
            .catch(err => {
                showErrorMsg('Cannot remove note')
            })
    }


    render() {
        const { notes } = this.state
        const { onRemoveNote, loadNotes , } = this

        return <section className="note-index ">
            <div className="note-content">
                <div className="note-create">
                    <Link to="/note/edit/">
                        <p> Take a note...</p>
                    </Link>
                    <div className="btns-create">

                        <Link to="/note/edit/">
                            <button className="btn-create-txt" data-tooltip-text="NewList" tabIndex="1">
                                <i className="fa-solid fa-t"></i>
                            </button>
                        </Link>

                        <Link to="/note/edit/imgType">
                                <button className="btn-create-image" data-tooltip-text="NewNoteWithImage" tabIndex="1">
                                    <i className="fa-regular fa-image"></i>
                                </button>
                        </Link>
                    </div>
                </div>
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </div>
            <section>
                <Route exact path="/note/edit/:noteType?" render={(props) => <NoteEdit loadNotes={loadNotes} onRemoveNote={onRemoveNote} {...props} />} />
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
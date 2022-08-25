import { NoteService } from "../services/note.service.js"

export class NoteEdit extends React.Component {

    state = {
        note: {
            id: "",
            type: "note-txt",
            isPinned: true,
            info: {
                title: "",
                txt: "",
            }
        }
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const { noteId } = this.props.match.params
        if (!noteId) return
        NoteService.getById(noteId).then(note => this.setState({ note }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ note }) => ({
            note: {
                ...note, info: {
                    ...note.info, [field]: value
                }
            }
        }))
    }

    onSaveNote = (ev) => {
        ev.preventDefault()
        NoteService.save(this.state.note)
            .then(() => {
                console.log(this.props)
                this.setState(() => ({
                    note: {
                        id: "",
                        type: "note-txt",
                        isPinned: true,
                        info: {
                            title: "",
                            txt: "",
                        }
                    }
                }))
                this.props.loadNotes()
                this.props.history.push('/note')
            })
    }

    render() {
        console.log('state:', this.state.note)
        console.log(this.props)
        const { title, txt } = this.state.note.info
        const { onSaveNote, handleChange } = this
        return <div className="edit-note-modal flex column">

            <form className="flex column" onSubmit={onSaveNote} id="save-note">
                <input className="title-input" type="text" name="title"
                    value={title} id="title"
                    placeholder="Title"
                    onChange={handleChange} />

                <textarea className="txt-input" type="text" name="txt"
                    value={txt} id="txt" cols="5"
                    placeholder="Take a note..."
                    onChange={handleChange} />
            </form>

            <div className="edit-toolbar">
                <button className="btn-create-list" data-tooltip-text="NewList" tabIndex="1">
                    <i className="fa-regular fa-square-check"></i>
                </button>
                <button className="btn-create-draw" data-tooltip-text="NewNoteWithDrawing" tabIndex="1">
                    <i className="fa-solid fa-paintbrush"></i>
                </button>
                <button className="btn-create-image" data-tooltip-text="NewNoteWithImage" tabIndex="1">
                    <i className="fa-regular fa-image"></i>
                </button>
                <button className="btn-save" data-tooltip-text="Save" tabIndex="1" form="save-note">
                    Save
                </button>
            </div>
        </div>
    }
}
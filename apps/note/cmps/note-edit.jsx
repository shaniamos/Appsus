import { NoteService } from "../services/note.service.js"
import { NoteNav } from "./note-nav.jsx"
import { TodosList } from "./todos-list.jsx"

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
        const { type } = this.state.note
        const { url } = this.state.note.info
        console.log(type, url)
    }

    loadNote = () => {
        const { noteType } = this.props.match.params
        if (!noteType) return

        const type = this.getType(noteType)
        if (type === undefined) {
            NoteService.getById(noteType).then(note => this.setState({ note }))
        } else {
            this.setState(({ note }) => ({
                note: {
                    ...note, type: `${type}`
                }
            }))
        }
    }

    getType = (noteType) => {
        switch (noteType) {
            case 'imgType':
                return 'note-img'
            case 'listType':
                return 'note-todos'
            case 'urlType':
                return 'note-url'
        }
        return undefined
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

    handleStyleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({ note }) => ({
            note: {
                ...note, style: {
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

    

    onImgInput = (ev) => {
        var reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.onload = (event) => {
            this.doUploadImg(event.target.result)
        }
    }

    doUploadImg = (imgDataUrl) => {
        const formData = new FormData();
        formData.append('img', imgDataUrl)
        fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
            .then(res => res.text())
            .then((url) => {
                console.log('Got back live url:', url);
                const newUrl = url.replace("serveForShare.php?id=", "img/")
                this.setState(({ note }) => ({
                    note: {
                        ...note, info: {
                            ...note.info, ['url']: `${newUrl}.jpg`
                        }, type: 'note-img'
                    }
                }))
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        const { note } = this.state
        const { title, txt, url } = this.state.note.info
        const { type } = this.state.note
        const { onRemoveNote } = this.props
        const style = note.style ? note.style : {}
        const backgroundColor = (style.backgroundColor) ? style.backgroundColor : "white"
        console.log('state:', this.state)
        const { onSaveNote, handleChange, onImgInput, handleStyleChange } = this

        return <div className="edit-note-modal flex column" style={{ backgroundColor: backgroundColor }} >
            {(url !== undefined) && <img className="edit-modal-img" src={`${url}`} alt="" />}
            {(type === 'note-img' && url === undefined) && <label className="select-img-label" htmlFor="imgInputTag">
                Select Image
                <br />
                <i className="fa-solid fa-camera"></i>
            </label>}

            {(type === 'note-todos') && <TodosList onSaveNote={onSaveNote} note={note} />}

            <form className="flex column" onSubmit={onSaveNote} id="save-note">
                <input className="title-input" type="text" name="title"
                    value={title} id="title"
                    placeholder="Title"
                    onChange={handleChange} />

                <textarea className="txt-input" type="text" name="txt"
                    value={txt} id="txt"
                    placeholder="Take a note..."
                    onChange={handleChange} />
            </form>

            <div className="edit-toolbar">

                <button className="btn-background-color" data-tooltip-text="BackgroundOption" tabIndex="1">
                    <label className="" htmlFor="backgroundColor">
                        <i className="fa-solid fa-palette"></i>
                        <input className="color-input" type="color" name="backgroundColor"
                            id="backgroundColor" onChange={handleStyleChange} style={{ display: 'none' }} />
                    </label>

                </button>

                <button className="btn-create-image" data-tooltip-text="NewNoteWithImage" tabIndex="1">
                    <label className="btn-add-image" htmlFor="imgInputTag">
                        <i className="fa-regular fa-image"></i>
                    </label>
                </button>

                <input id="imgInputTag" type="file" className="file-input-btn" name="image"
                    onChange={onImgInput} accept=".png, .jpg, .jpeg" style={{ display: 'none' }} />

                <button className="" data-tooltip-text="DeleteNote" tabIndex="1" onClick={(event) => {
                    onRemoveNote(event, note.id)
                    this.props.history.push('/note')
                }}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>

                <button className="btn-save" data-tooltip-text="Save" tabIndex="1" form="save-note">
                    <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" />
                </button>
            </div>
        </div>
    }
}
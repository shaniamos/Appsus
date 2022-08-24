import { NotePreview } from '../cmps/note-preview.jsx'
const { Link } = ReactRouterDOM

export class NoteList extends React.Component {

    render() {
        console.log(this.props)
        const { onRemoveNote } = this.props
        const { notes } = this.props
        return <section className="note-list">
            <ul>
                {
                    notes.map((note , idx) =>
                        <li className="note-preview" key={note.id}>
                            <NotePreview note={note}/>
                            {/* <Link to={`/note/edit/${note.id}`}>Edit</Link> */}
                            {/* <button onClick={() => onRemoveCar(note.id)}>X</button> */}
                            <div className="preview-toolbar" role="toolbar" key={note.id}>
                                {/* RemindMe */}
                                <button className="" data-tooltip-text="RemindMe" tabIndex="1">
                                <i className="fa-regular fa-bell"></i>
                                </button>
                                {/* Collaborator */}
                                <button className="" data-tooltip-text="Collaborator" tabIndex="1">
                                <i className="fa-solid fa-user-plus"></i>
                                </button>
                                {/* BackgroundOptions */}
                                <button className="" data-tooltip-text="BackgroundOption" tabIndex="1">
                                <i className="fa-solid fa-palette"></i>
                                </button>
                                {/* AddImage */}
                                <button className="" data-tooltip-text="AddImage" tabIndex="1">
                                <i className="fa-regular fa-image"></i>
                                </button>
                                {/* Archive
                                <button className="" data-tooltip-text="Archive" tabIndex="1">
                                <i className="fa-solid fa-box-archive"></i>
                                </button> */}
                                {/* More */}
                                <button className="" data-tooltip-text="More" tabIndex="1">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {/* Delete */}
                                <button className="" data-tooltip-text="DeleteNote" tabIndex="1" onClick={()=> onRemoveNote(note.id)}>
                                <i className="fa-solid fa-trash-can"></i>
                                </button>

                            </div>
                        </li>
                    )
                }
            </ul>

        </section>
    }
}

/*
pin 
<i class="fa-solid fa-thumbtack"></i>

remind me
<i class="fa-regular fa-bell"></i>

collaborator
<i class="fa-solid fa-user-plus"></i>

background option
<i class="fa-solid fa-palette"></i>

add image
<i class="fa-regular fa-image"></i>

archive 
<i class="fa-solid fa-box-archive"></i>


new list 
<i class="fa-regular fa-square-check"></i>

new note with drawing 
<i class="fa-solid fa-paintbrush"></i>

More 
<i class="fa-solid fa-ellipsis-vertical"></i>

redu
<i class="fa-solid fa-rotate-right"></i>

undu
<i class="fa-solid fa-rotate-left"></i>

drag 
<i class="fa-solid fa-grip-vertical"></i>


nav

Notes
<i class="fa-regular fa-lightbulb"></i>

Reminders
<i class="fa-regular fa-bell"></i>

Edit labels
<i class="fa-solid fa-pencil"></i>

Archive
<i class="fa-solid fa-box-archive"></i>

Bin
<i class="fa-solid fa-trash-can"></i>
*/

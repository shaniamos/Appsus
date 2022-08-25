import { NotePreview } from '../cmps/note-preview.jsx'
import { PreviewToolbar } from '../cmps/preview-toolbar.jsx'
const { Link } = ReactRouterDOM

export class NoteList extends React.Component {

    

    render() {
        const { onRemoveNote } = this.props
        const { notes } = this.props
        return <section className="note-list">
            <ul className="preview-list">
                {
                    notes.map((note, idx) => {
                        const style = note.style ? note.style : {}
                        const backgroundColor = (style.backgroundColor) ? style.backgroundColor : "transparent"
                        return <Link to={`/note/edit/${note.id}`} key={note.id}>
                            <li className="note-preview"  style={{ backgroundColor: backgroundColor }}>
                                <NotePreview note={note} />
                                <PreviewToolbar noteId={note.id} onRemoveNote={onRemoveNote} />
                            </li>
                        </Link>
                    })
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

import { PreviewToolbar } from '../cmps/preview-toolbar.jsx'
import { TodosList } from './todos-list.jsx'
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
                        const { title, txt, url, todos } = note.info
                        const { type } = note
                        console.log(type)

                        return <Link to={`/note/edit/${note.id}`} key={note.id} className="note-li">
                            <li className="note-preview" style={{ backgroundColor: backgroundColor }}>
                                {(url !== undefined) && <img className="edit-modal-img" src={`${url}`} alt="" />}
                                {(title) && <h1 className="preview-title" >{title}</h1>}
                                {(txt) && <pre className="preview-text" >{`${txt}`}</pre>}
                                {(type === 'note-todos') && <TodosList note={note} />}
                                <PreviewToolbar noteId={note.id} onRemoveNote={onRemoveNote} />
                            </li>
                        </Link>
                    })
                }
            </ul>

        </section>
    }
}

import { NotePreview } from '../cmps/note-preview.jsx'
const { Link } = ReactRouterDOM

export class NoteList extends React.Component {

    render() {
        console.log(this.props)
        const { notes } = this.props
   
        return <section className="note-list">
            <ul>
                {
                    notes.map(note =>
                        <li className="note-preview" key={note.id}>
                            <NotePreview note={note}/>
                            {/* <Link to={`/note/edit/${note.id}`}>Edit</Link> */}
                            {/* <button onClick={() => onRemoveCar(note.id)}>X</button> */}
                        </li>
                    )
                }
            </ul>

        </section>
    }
}

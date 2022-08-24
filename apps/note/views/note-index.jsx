import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink, Link } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null,
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


    render() {
        const { notes } = this.state
        return <section className="note-index main-layout">
            Hello from note-index
            <div className="note-side-nav flex column">
                <a className="notes" href="">Notes</a>
                <a className="notes" href="">Reminder</a>
                <a className="notes" href="">Edit labels</a>
                <a className="notes" href="">Archive</a>
                <a className="notes" href="">Bin</a>
            </div>

            <NoteList notes={notes} />
        </section>

    }
}

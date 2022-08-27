import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { BookIndex } from "./apps/book/views/book-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { NoteEdit } from "./apps/note/cmps/note-edit.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    this.props.history.push(`/mail`)


    return <Router>
        <section className="app">
            
            <AppHeader />
            <Switch>
                <Route path="/mail/details/:mailId?" component={MailDetails}  />
                <Route path="/mail" component={MailIndex} />
                <Route path="/note/" component={NoteIndex} />
            </Switch>
        </section>
    </Router>
}

import { AppHeader } from "./cmps/app-header.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"

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
                <Route path="/" component={MailIndex} />
            </Switch>
        </section>
    </Router>
}

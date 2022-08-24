import { MailEdit } from "../cmps/mail-edit.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailDetails } from "./mail-details.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailPreview } from "../cmps/mail-preview.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null,
    }

    // componentDidMount() {
    //     this.loadMails()
    // }

    // loadMails = () => {
    //     MailService.query(this.state.filterBy)
    //         .then(mails => this.setState({ mails }))
    // }

    render() {
        return <Router>
            <section className="mail-index main-layout">
                Hello from mail-index
                <nav>
                    <button> + New Email</button>
                    {/* <NavLink exact to="/mail/inbox">Inbox</NavLink>
                    <NavLink to="/mail/starred">Starred - filter</NavLink>
                    <NavLink to="/mail/sent">Sent Mail</NavLink>
                    <NavLink to="/mail/drafts">Draft</NavLink> */}
                </nav>
                <Switch>
                    <Route path="/mail" component={MailList} />
                </Switch>
            </section>
        </Router>
    }
}
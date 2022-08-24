
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class NoteIndex extends React.Component {
    render() {
        return <Router>
            <section className="mail-index main-layout">
                Hello from note-index
                {/* <nav>
                    <input type="text" name="" id="" />
                    <NavLink exact to="/mail/inbox">Inbox</NavLink>
                    <NavLink to="/mail/starred">Starred - filter</NavLink>
                    <NavLink to="/mail/sent">Sent Mail</NavLink>
                    <NavLink to="/mail/drafts">Draft</NavLink>
                </nav>
                <Switch>
                    <Route path="/mail" component={MailList} />
                </Switch> */}
            </section>
        </Router>
    }
}

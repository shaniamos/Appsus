const { Link, NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './user-msg.jsx';

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <div className="logo">
                LOGOOO
            </div>
        </Link>
        <nav>
            <NavLink to="/book">Book</NavLink>
            <NavLink to="/note">Note</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
        <UserMsg />

    </header>
}

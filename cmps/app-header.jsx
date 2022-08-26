const { Link, NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './user-msg.jsx';

export function AppHeader() {

    function openMenu(){
        console.log('hey');
        document.body.classList.toggle('menu-opened')

    }

    return <header >
        <div className="app-header">

        <Link to="/">
            <div className="main-logo">
                <img src="../assets/img/festisite_google.png" alt="" />
            </div>
        </Link>
        <button className="toggle-menu" onClick={() => openMenu()}>☰</button>
        <div className="main-screen" onClick={() => openMenu()}></div>

        <nav className="main-nav">
            <NavLink className="fas fa-book" to="/book"></NavLink>
            <NavLink to="/note"><i className="far fa-sticky-note"></i></NavLink>
            <NavLink to="/mail"><i className="fas fa-envelope"></i></NavLink>
            <NavLink to="/about"><i className="fa-solid fa-address-card"></i></NavLink>
            <NavLink exact to="/"><i className="fa-solid fa-house-chimney"></i></NavLink>
        </nav>
        <UserMsg />
        </div>

    </header>
}

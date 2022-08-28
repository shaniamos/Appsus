const { Link, NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './user-msg.jsx';

export function AppHeader() {

    function openMenu(){
        document.body.classList.toggle('menu-opened')

    }

    return <header >
        <div className="app-header">

        <Link to="/">
            <div className="main-logo">
                <img src="..\assets\img\festisite_google.png" alt="" />
            </div>
        </Link>
        <button className="toggle-menu" onClick={() => openMenu()}><img className="menu-img"  src="../assets/img/menu2.png"></img></button>
        <div className="main-screen" onClick={() => openMenu()}></div>

        <nav className="main-nav">
            <NavLink to="/note" onClick={() => openMenu()}><img className="keep-img" src="../assets/img/keepicon.png"></img></NavLink>
            <NavLink to="/mail" onClick={() => openMenu()}><img className="gmail-img" src="../assets/img/mailicon.png"></img></NavLink>
        </nav>
        <UserMsg />
        </div>

    </header>
}

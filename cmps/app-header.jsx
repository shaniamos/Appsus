const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <div className="logo">AppSus </div>
        </Link>

        <nav className="main-nav">
            <NavLink className="fas fa-book" to="/book"></NavLink>
            <NavLink to="/note"><i className="far fa-sticky-note"></i></NavLink>
            <NavLink to="/mail"><i className="fas fa-envelope"></i></NavLink>
            <NavLink to="/about"><i className="fa-solid fa-address-card"></i></NavLink>
            <NavLink exact to="/"><i className="fa-solid fa-house-chimney"></i></NavLink>
        </nav>
    </header>
}

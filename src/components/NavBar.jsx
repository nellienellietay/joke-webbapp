import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="menu-text">Menu</span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/my-jokes">My jokes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favourites">Favourites</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/history">History</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
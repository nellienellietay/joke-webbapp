import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/my-jokes">My jokes</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
                <NavLink to="/history">History</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
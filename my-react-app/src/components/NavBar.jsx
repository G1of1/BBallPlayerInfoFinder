import { Link } from "react-router-dom"
import '../css/NavBar.css';
function NavBar()
{
    return(
        <nav className="nav-bar">
            <div>
                <Link to="/" className="nav-link">NBA Player Stats</Link>
            </div>
        </nav>
    );
}

export default NavBar
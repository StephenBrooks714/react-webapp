import {Link} from "react-router-dom";
// <Link className="nav-link" to="/">Home</Link>
function NavBar() {
    return (
        <>
            <nav className={"navbar fixed-top bg-primary-gradient"}>
                <ul className={"nav-items-left"}>
                    <li className={"nav-logo"}>
                        <Link to={"/"}>
                            <i className="fa-brands fa-node"></i>
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                </ul>
                <ul className={"nav-items-right"}>
                    <li className={"dropdown"}>
                        <Link className={"dropdown-menu"} to={"#!"}>
                            <i className="fa-solid fa-bars"></i>
                        </Link>
                        <div className={"dropdown-items"}>
                            <Link to={"#!"}>link</Link>
                            <Link to={"#!"}>link</Link>
                            <Link to={"#!"}>link</Link>
                            <Link to={"#!"}>link</Link>
                            <Link to={"#!"}>link</Link>
                        </div>
                    </li>
                    <li className={"nav-item"}><Link className="nav-link" to="/login">Login</Link></li>
                    <li className={"nav-item"}><Link className="nav-link" to="/register">Register</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
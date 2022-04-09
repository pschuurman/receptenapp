import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

function NavBar () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/inloggen" activeClassName="active-link">Inloggen</Link></li>
                </ul>
            </nav>
        </>

    );
}

export default NavBar;

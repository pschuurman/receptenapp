import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

function NavBar () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/inloggen">Inloggen</Link></li>
                    <li><Link to="/aanmelden">Aanmelden</Link></li>
                </ul>
            </nav>
        </>

    );
}

export default NavBar;

import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <>
            <nav>
                <button type="button" onClick={() => history.push('/')}>
                    Home
                </button>
                {isAuth ?
                    <button type="button" onClick={logout}>
                        Log uit
                    </button>
                    :
                    <div>
                    <button
                    type="button"
                    onClick={() => history.push("/inloggen")}
                    >
                    Log in
                    </button>
                    <button
                    type="button"
                    onClick={() => history.push("/aanmelden")}
                    >
                    Registreren
                    </button>
                    </div>
                }
            </nav>
        </>

    );
}

export default NavBar;

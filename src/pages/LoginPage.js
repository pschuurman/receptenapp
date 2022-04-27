import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

function LoginPage() {
    const {login} = useContext(AuthContext);

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function RegisterUser(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": userName,
                    "password": password,
                });
            console.log(response)

            history.push("/profiel")
        } catch (e) {
            console.error(e.response);


        }
    }


    function RegisterUser(e) {
        e.preventDefault();
        console.log(userName, password);
        login();
    }





    return (

        <>


            <div>login pagina</div>

            <form onSubmit={RegisterUser}>

                <label htmlFor="login-username">
                    Username:
                    <input type="text"
                           id="login-username"
                           onChange={(e) => setUsername(e.target.value)}
                           value={userName}
                    />
                </label>


                <label htmlFor="login-password">
                    Password:
                    <input type="password"
                           id="login-password"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           placeholder="vul je wachtwoord in"
                    />
                </label>




                <button type="submit">Verzenden</button>
            </form>

            <p>Heb je nog geen account? <Link to="/aanmelden">Registreer</Link> je dan eerst.</p>

        </>

    );
}

export default LoginPage;

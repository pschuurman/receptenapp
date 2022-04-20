import React, {useState} from 'react';
import NavBar from "../components/NavBar/NavBar";
import {useHistory} from "react-router-dom";
import axios from "axios";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setRole] = useState('');



    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
            {
                "username": userName,
                "email": email,
                "password": password,
                "role": [user]
            });
            console.log(response)

        history.push("/inloggen")
        } catch (e) {
            console.error(e);

        }
    }


    return (

        <>
            <NavBar/>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="email"
                           id="email"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                    />
                </label>
                <label htmlFor="username">
                    Username:
                    <input type="text"
                           id="username"
                           onChange={(e) => setUsername(e.target.value)}
                           value={userName}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password"
                           id="password"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                    />
                </label>
                <label htmlFor="role">
                    Role:
                    <input type="text"
                           id="role"
                           onChange={(e) => setRole(e.target.value)}
                           value={user}
                    />
                </label>


                <button type="submit">Verzenden</button>
            </form>


        </>

    );
}

export default LoginPage;
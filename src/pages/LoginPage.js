import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";

function LoginPage() {
    async function getLoginData() {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/test/all`);
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }

    }

    getLoginData();

    return (

        <>
            <NavBar/>


            <form>

            </form>


        </>

    );
}

export default LoginPage;

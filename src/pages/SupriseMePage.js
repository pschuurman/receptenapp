import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar/NavBar";

const apiKey = '5ab533819047439182158dd8d85e7c56';

function SupriseMePage() {
    const [supriseData, setKitchenData] = useState({});

    async function SupriseMeData() {
        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
            console.log(result.data);
            setKitchenData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <NavBar />
            <button type="button" onClick={SupriseMeData}>
                Geef me een recept!
            </button>

            <div>
                {Object.keys(supriseData).length > 0 &&
                    <>
                        <article>
                            <p>{supriseData.recipes[0].title}</p>
                            <img src={supriseData.recipes[0].image} />
                        </article>
                        <p>Bereidingstijd: {supriseData.recipes[0].readyInMinutes} minuten</p>
                    </>
                }
            </div>
        </>

    );
}

export default SupriseMePage;

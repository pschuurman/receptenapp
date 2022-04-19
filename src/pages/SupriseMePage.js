import React, {useState} from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar/NavBar";
import './tiles.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function SupriseMePage() {
    const [supriseData, setKitchenData] = useState({});
    const [error, toggleError] = useState(false);

    async function SupriseMeData() {
        toggleError(false);

        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
            console.log(result.data);
            setKitchenData(result.data);

            if (result.data.recipes.length === 0) {
                throw new SyntaxError(error);
            }


        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <NavBar/>
            <button type="button" onClick={SupriseMeData}>
                Geef me een recept!
            </button>

            {error && <>
                <div className="kitchen-names"><p className="error">Geen recept gevonden helaas, probeer het nog
                    eens</p></div>
            </>}

            <div>
                {Object.keys(supriseData).length > 0 &&
                <>
                    <article>
                        <p>{supriseData.recipes[0].title}</p>
                        <img src={supriseData.recipes[0].image}/>
                    </article>
                    <p>Bereidingstijd: {supriseData.recipes[0].readyInMinutes} minuten</p>
                    <div
                        className="ingredients">{supriseData.recipes[0].analyzedInstructions[0].steps[0].ingredients.map((banaan) => {
                        return (
                            <article key={banaan.name}>
                                <div>{banaan.name}</div>
                            </article>
                        );
                    })}
                    </div>
                    <div
                        className="instructions">{supriseData.recipes[0].analyzedInstructions[0].steps.map((banaan) => {
                        return (
                            <article key={banaan.step}>
                                <div>{banaan.step}</div>
                            </article>
                        );
                    })}
                    </div>

                </>
                }
            </div>
        </>

    );
}

export default SupriseMePage;



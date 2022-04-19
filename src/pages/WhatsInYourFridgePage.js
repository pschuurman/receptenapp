import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import './tiles.css';
import SearchBarKitchenFridge from "../components/SearchBarKitchenFridge/SearchBarKitchenFridge";

const apiKey = '5ab533819047439182158dd8d85e7c56';

function WhatsInYourFridgePage() {
    const [ingredientsData, setIngredientsData] = useState(null);
    const [ingredient, setIngredient] = useState('');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function getData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=9&apiKey=${apiKey}`);
                console.log(result.data);
                setIngredientsData(result.data);

                if (result.data.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (ingredient)
            getData();
    }, [ingredient]);


    return (
        <>
            <NavBar/>

            <div className="kitchen-names">
                <p className="region">Geen idee wat je kan maken met wat je nog in je koelkast hebt?
                    Vul je ingredienten in en kom er achter wat je kan maken met wat je hebt of nog moet kopen om dat ene recept te maken.</p>
            </div>
            <div className="kitchen-names">
                <SearchBarKitchenFridge setKitchenHandler={setIngredient}/>
            </div>

            {error && <><div className="kitchen-names"><p className="error">Geen recept gevonden helaas, probeer het nog eens</p></div></> }




            {ingredientsData && <>
                <div className="fridge">{ingredientsData.map((ingredientsList) => {
                    return (<article key={ingredientsList.id}>
                            <p>{ingredientsList.title}</p>
                            <img className="imagesize" src={ingredientsList.image}/>
                            <div className="ingredients-titel"><strong>Ingredienten in je koelkast:</strong></div>
                            <div className="ingredients">{ingredientsList.usedIngredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                );
                            })}
                            </div>
                            <div className="ingredients-titel"><strong>Ingredienten die je nog moet kopen:</strong></div>
                            <div className="ingredients">{ingredientsList.missedIngredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                );
                            })}
                            </div>
                        </article>
                    );
                })}
                </div>
            </>
            }
        </>
    );
}

export default WhatsInYourFridgePage;















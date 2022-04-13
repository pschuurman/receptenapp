import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import './tiles.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function WhatsInYourFridgePage() {
    const [ingredientsData, setIngredientsData] = useState(null);
    const [ingredient, setIngredient] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=9&apiKey=${apiKey}`);
                console.log(result.data);
                setIngredientsData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (ingredient)
            getData();
    }, [ingredient]);


    return (
        <>
            <NavBar/>
            <SearchBar setIngredientsHandler={setIngredient}/>

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















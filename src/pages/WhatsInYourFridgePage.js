import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import './WhatsInYourFridge.css';

const apiKey = '5ab533819047439182158dd8d85e7c56'

function WhatsInYourFridgePage() {
    const [ingredientsData, setIngredientsData] = useState( null);
    const [ingredient, setIngredient] = useState('');

    useEffect(()=> {
        async function getData () {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=9&apiKey=${apiKey}`);
                console.log(result.data[0].missedIngredients[0].name);
                setIngredientsData(result.data);
            } catch (e) {
                console.error(e)
            }
        }
    if (ingredient)
        getData();
    },[ingredient])


    return (
        <>
                <NavBar />
                <SearchBar setIngredientsHandler={setIngredient} />

                {ingredientsData && <>
                    <div className="fridge">{ingredientsData.map((ingredientsList) => {
                            return (<article key={ingredientsList.id}>
                                        <p>{ingredientsList.title}</p>
                                        <img className="imagesize" src={ingredientsList.image}/>
                                    </article>
                        )})}
                    </div>
                </>
                }
        </>
    );
}
export default WhatsInYourFridgePage;















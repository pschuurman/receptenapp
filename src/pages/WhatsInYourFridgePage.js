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
                const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=12&apiKey=${apiKey}`);
                console.log(result.data);
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
                    <div className="fridge">
                        {ingredientsData.map((kitchenList) => {
                            return (<article key={kitchenList.id}>
                                        <p>{kitchenList.title}</p>
                                        <img className="imagesize" src={kitchenList.image}/>
                                        </article>
                        )})}
                    </div>
                </>
                }
        </>
    );
}
export default WhatsInYourFridgePage;















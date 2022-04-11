import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarAllergen from "../components/SearchBarAllergen/SearchBarAllergen";
import './ChooseKitchenPage.css';

const apiKey = '5ab533819047439182158dd8d85e7c56'

function AllergenFreePage() {
    const [allergenData, setAllergenData] = useState( null);
    const [allergen, setAllergen] = useState('');

    useEffect(()=> {
        async function getAllergenData () {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?intolerances=${allergen}=false&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setAllergenData(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        if (allergen)
            getAllergenData();
    },[allergen])


    return (
        <>
            <NavBar />

            <SearchBarAllergen setAllergenHandler={setAllergen} />

            {allergenData && <>
                <div className="choose-kitchen">{allergenData.results.map((AllergenList) => {
                    return (<article key={AllergenList.id}>
                            <p>{AllergenList.title}</p>
                            <img src={AllergenList.image} />
                            <div>Ready in: {AllergenList.readyInMinutes} minutes</div>
                            <div className="ingredients">{allergenData.results[0].analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                )})}
                            </div>
                            <div className="instructions">{allergenData.results[0].analyzedInstructions[0].steps.map((banaan) => {
                                return (
                                    <article key={banaan.step}>
                                        <div>{banaan.step}</div>
                                    </article>
                                )})}
                            </div>
                        </article>
                    )})}
                </div>
            </>
            }
        </>
    );
}
export default AllergenFreePage;


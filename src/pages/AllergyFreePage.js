import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarAllergen from "../components/SearchBarAllergen/SearchBarAllergen";

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
                <div className="choose-kitchen">{allergenData.results.map((kitchenList) => {
                    return (<article key={kitchenList.id}>
                            <p>{kitchenList.title}</p>
                            <img src={kitchenList.image} />
                            <div>Ready in: {kitchenList.readyInMinutes} minutes</div>
                        </article>
                    )})}
                </div>
            </>
            }
        </>
    );
}
export default AllergenFreePage;


import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarAllergen from "../components/SearchBarAllergen/SearchBarAllergen";

const apiKey = '5ab533819047439182158dd8d85e7c56'

function CookOnTimePage() {
    const [cookData, setCookData] = useState( null);
    const [minutes, setMinutes] = useState('');

    useEffect(()=> {
        async function getAllergenData () {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${minutes}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setCookData(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        if (minutes)
            getAllergenData();
    },[minutes])


    return (
        <>
            <NavBar />

            <SearchBarAllergen setAllergenHandler={setMinutes} />

            {cookData && <>
                <div className="choose-kitchen">{cookData.results.map((kitchenList) => {
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
export default CookOnTimePage;
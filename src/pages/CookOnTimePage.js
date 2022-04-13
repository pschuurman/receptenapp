import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarAllergen from "../components/SearchBarAllergen/SearchBarAllergen";
import './tiles.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function CookOnTimePage() {
    const [cookData, setCookData] = useState(null);
    const [minutes, setMinutes] = useState('');

    useEffect(() => {
        async function getAllergenData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${minutes}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setCookData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (minutes)
            getAllergenData();
    }, [minutes]);


    return (
        <>
            <NavBar/>

            <SearchBarAllergen setAllergenHandler={setMinutes}/>

            {cookData && <>
                <div className="choose-kitchen">{cookData.results.map((cookList) => {
                    return (<article key={cookList.id}>
                            <p>{cookList.title}</p>
                            <img src={cookList.image}/>
                            <div>Ready in: {cookList.readyInMinutes} minutes</div>
                            <div
                                className="ingredients">{cookList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                );
                            })}
                            </div>

                            <div className="instructions">{cookList.analyzedInstructions[0].steps.map((banaan) => {

                                return (
                                    <article key={banaan.step}>
                                        <div>{banaan.step}</div>
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

export default CookOnTimePage;

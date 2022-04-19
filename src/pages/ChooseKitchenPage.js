import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import './tiles.css';


const apiKey = '5ab533819047439182158dd8d85e7c56';

function ChooseKitchenPage() {
    const [kitchenData, setKitchenData] = useState(null);
    const [kitchen, setKitchen] = useState('');
    const [error, toggleError] = useState(false);


    useEffect(() => {
        async function getKitchenData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${kitchen}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setKitchenData(result.data);

                if (result.data.results.length === 0) {
                    throw new SyntaxError(error);
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (kitchen)
            getKitchenData();
    }, [kitchen]);


    return (
        <>
            <NavBar/>
            <div className="kitchen-names">
                <p className="region">Wil jij eten uit je favoriete keuken of proeven van overheerlijke andere keukens?
                    Dan ben je hier op het goede adres. Je kan hier kiezen uit de volgende keukens: </p>
                <p className="region">African, Caribbean, Chinese, Eastern European, European, French, German,
                    Greek, Indian, Irish, Italian, Japanese, Jewish, Korean, Latin American, Mediterranean, Middle
                    Eastern, Nordic, Spanish, Thai, Vietnamese
                </p>
            </div>
            <div className="kitchen-names">
                <SearchBar setFavoriteKitchenHandler={setKitchen}/>
            </div>
            {error && <>
                <div className="kitchen-names"><p className="error">Geen recept gevonden helaas, probeer het nog
                    eens</p></div>
            </>}


            {kitchenData && <>
                <div className="kitchen-names"><p className="region">We hebben {kitchenData.results.length} recepten
                    gevonden</p></div>
                <div className="choose-kitchen">{kitchenData.results.map((kitchenList) => {
                    return (<article key={kitchenList.id}>
                            <p>{kitchenList.title}</p>
                            <img src={kitchenList.image}/>
                            <div>Ready in: {kitchenList.readyInMinutes} minutes</div>
                            <div
                                className="ingredients">{kitchenList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                );
                            })}
                            </div>
                            <div className="instructions">{kitchenList.analyzedInstructions[0].steps.map((banaan) => {

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

export default ChooseKitchenPage;

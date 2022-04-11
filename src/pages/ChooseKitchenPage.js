import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar/NavBar";
import SearchBarKitchen from "../components/SearchBarKitchen/SearchBarKitchen";
import './ChooseKitchenPage.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function ChooseKitchenPage() {
    const [kitchenData, setKitchenData] = useState(null);
    const [kitchen, setKitchen] = useState('');

    useEffect(()=> {
        async function getKitchenData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${kitchen}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data.results[0].analyzedInstructions);
                setKitchenData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (kitchen)
            getKitchenData();
    },[kitchen])


    return (
        <>
                <NavBar />
                <SearchBarKitchen setKitchenHandler={setKitchen}/>
                <div className="kitchen-names">
                    <p className="region">African</p>
                    <p className="region">Cajun</p>
                    <p className="region">Caribbean</p>
                    <p className="region">Chinese</p>
                    <p className="region">Eastern European</p>
                    <p className="region">European</p>
                    <p className="region">French</p>
                    <p className="region">German</p>
                    <p className="region">Greek</p>
                    <p className="region">Indian</p>
                    <p className="region">Irish</p>
                    <p className="region">Italian</p>
                    <p className="region">Japanese</p>
                    <p className="region">Jewish</p>
                    <p className="region">Korean</p>
                    <p className="region">Latin American</p>
                    <p className="region">Mediterranean</p>
                    <p className="region">Middle Eastern</p>
                    <p className="region">Nordic</p>
                    <p className="region">Spanish</p>
                    <p className="region">Thai</p>
                    <p className="region">Vietnamese</p>
                </div>


                {kitchenData && <>
                    <div className="choose-kitchen">{kitchenData.results.map((kitchenList) => {
                        return (<article key={kitchenList.id}>
                                        <p>{kitchenList.title}</p>
                                        <img src={kitchenList.image} />
                                        <div>Ready in: {kitchenList.readyInMinutes} minutes</div>
                                <div className="ingredients">{kitchenList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                    return (
                                        <article key={ingredients.name}>
                                            <div>{ingredients.name}</div>
                                        </article>
                                    )})}
                                </div>
                                <div className="instructions">{kitchenList.analyzedInstructions[0].steps.map((banaan) => {
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
export default ChooseKitchenPage;
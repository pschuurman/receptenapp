import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarMood from "../components/SearchBarMood/SearchBarMood";
import './tiles.css';

const apiKey = '5ab533819047439182158dd8d85e7c56';

function MoodForFoodPage() {
    const [moodForData, setMoodForData] = useState(null);
    const [mood, setMood] = useState('');

    useEffect(() => {
        async function getMoodData() {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&type=${mood}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setMoodForData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (mood)
            getMoodData();
    }, [mood]);


    return (
        <>
            <NavBar/>



            <div className="kitchen-names">
                <p className="region">Waar je ook voor in de stemming voor bent er is geen gevoel waar geen recept bij past.
                Kies hier uit:</p>
                <p className="region">dessert</p>
                <p className="region">bread</p>
                <p className="region">breakfast</p>
                <p className="region">soup beverage</p>
                <p className="region">sauce</p>
                <p className="region">marinade</p>
                <p className="region">fingerfood snack</p>
                <p className="region">drink.</p>
                <p className="region">En krijg een lekker recept dat helemaal past bij je gevoel</p>
            </div>
            <div className="kitchen-names">
                <SearchBarMood setMoodHandler={setMood}/>
            </div>
            {moodForData && <>
                <div className="choose-kitchen">{moodForData.results.map((moodList) => {
                    return (<article key={moodList.id}>
                            <p>{moodList.title}</p>
                            <img src={moodList.image}/>
                            <div>Ready in: {moodList.readyInMinutes} minutes</div>
                            <div
                                className="ingredients">{moodList.analyzedInstructions[0].steps[0].ingredients.map((ingredients) => {
                                return (
                                    <article key={ingredients.name}>
                                        <div>{ingredients.name}</div>
                                    </article>
                                );
                            })}
                            </div>
                            <div className="instructions">{moodList.analyzedInstructions[0].steps.map((banaan) => {

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

export default MoodForFoodPage;
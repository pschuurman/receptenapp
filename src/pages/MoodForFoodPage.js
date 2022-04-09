import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SearchBarMood from "../components/SearchBarMood/SearchBarMood";

const apiKey = '5ab533819047439182158dd8d85e7c56'

function MoodForFoodPage() {
    const [moodForData, setMoodForData] = useState( null);
    const [mood, setMood] = useState('');

    useEffect(()=> {
        async function getMoodData () {
            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${mood}&addRecipeInformation=true&apiKey=${apiKey}`);
                console.log(result.data);
                setMoodForData(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        if (mood)
            getMoodData();
    },[mood])


    return (
        <>
            <NavBar />

                <SearchBarMood setMoodHandler={setMood} />
                <ul>
                    <li>
                        Je kan kiezen uit:
                        main course , side dish , dessert
                        appetizer , salad , bread , breakfast , soup
                        beverage, sauce , marinade , fingerfood
                        snack , drink
                    </li>
                </ul>
            {moodForData && <>
                <div className="choose-kitchen">{moodForData.results.map((kitchenList) => {
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
export default MoodForFoodPage;
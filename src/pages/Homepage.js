import Choosekitchen from "../components/ChooseKitchen/Choosekitchen";
import SurpriseMe from "../components/SurpriseMe/SurpriseMe";
import AllergyFree from "../components/AllergyFree/AllergyFree";
import WhatsInYourFridge from "../components/WhatsInYourFridge/WhatsInYourFridge";
import MoodForFood from "../components/MoodForFood/MoodForFood";
import CookOnTime from "../components/CookOnTime/CookOnTime";
import keuken from "../assets/FavouriteKitchen.jpg";
import inhoudkoelkast from "../assets/WatInKoelkast.jpg"
import voorelkestemmingiets from "../assets/Stemming.jpg"
import laatjeverrassen from "../assets/Surprise.jpg"
import allergenenvrij from "../assets/allergievrij.jpg"
import zoekrecept from "../assets/kookboek.jpg"
import NavBar from "../components/NavBar/NavBar";
import './HomePage.css';


function Homepage () {
    return (
        <>
            <NavBar />


            <div className="homepage-container">


                <Choosekitchen
                    image={keuken}
                    title="Kies je favoriete keuken"
                />

                <WhatsInYourFridge
                image={inhoudkoelkast}
                title={"Wat kan ik maken?"}
                />

                <MoodForFood
                image={voorelkestemmingiets}
                title={"Voor elke stemming iets"}
                />


                <SurpriseMe
                image={laatjeverrassen}
                title={"Laat je verrassen"}
                />

                <AllergyFree
                image={allergenenvrij}
                title={"Kook allergenenvrij"}
                />

                <CookOnTime
                image={zoekrecept}
                title={"Hoeveel tijd heb je?"}
                />

            </div>
        </>

    );
}

export default Homepage;
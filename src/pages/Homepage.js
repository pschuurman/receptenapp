import keuken from "../assets/FavouriteKitchen.jpg";
import inhoudkoelkast from "../assets/WatInKoelkast.jpg";
import voorelkestemmingiets from "../assets/Stemming.jpg";
import laatjeverrassen from "../assets/Surprise.jpg";
import allergenenvrij from "../assets/allergievrij.jpg";
import zoekrecept from "../assets/kookboek.jpg";
import './HomePage.css';
import {Link} from "react-router-dom";
import Tile from "../components/Tile/Tile";
import NavBar from "../components/NavBar/NavBar";


function Homepage() {
    return (
        <>
            <NavBar />


            <div className="homepage-container">


                <Link to="kies-je-keuken">
                    <Tile
                        image={keuken}
                        title={"Kies je favoriete keuken"}
                    />
                </Link>

                <Link to="wat-kan-ik-maken">
                    <Tile
                        image={inhoudkoelkast}
                        title={"Wat kan ik maken?"}
                    />
                </Link>

                <Link to="voor-elke-stemming-iets">
                    <Tile
                    image={voorelkestemmingiets}
                    title={"Voor elke stemming iets"}
                />
                </Link>


                <Link to="laat-je-verrassen">
                    <Tile
                    image={laatjeverrassen}
                    title={"Laat je verrassen"}
                />
                </Link>

                <Link to="kook-allergenenvrij">
                    <Tile
                    image={allergenenvrij}
                    title={"Kook allergenenvrij"}
                />
                </Link>

                <Link to="kook-op-tijd">
                    <Tile
                    image={zoekrecept}
                    title={"Hoeveel tijd heb je?"}
                />
                </Link>


            </div>
        </>

    );
}

export default Homepage;
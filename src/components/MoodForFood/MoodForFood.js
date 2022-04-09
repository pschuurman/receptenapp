import React from "react";
import {Link} from "react-router-dom";

function MoodForFood ({title, image, description}) {
    return (
        <>
            <Link to="voor-elke-stemming-iets">
                <article>
                    <p>{title}</p>
                    <img src={image} alt={description} />
                </article>
            </Link>
        </>

    );
}


export default MoodForFood;
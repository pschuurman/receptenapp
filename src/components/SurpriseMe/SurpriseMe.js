import React from "react";
import {Link} from "react-router-dom";

function SurpriseMe({title, image, description}) {
    return (
        <>
            <Link to="laat-je-verrassen">
                <article>
                    <p>{title}</p>
                    <img src={image} alt={description}/>
                </article>
            </Link>
        </>


    );
}

export default SurpriseMe;

import React from "react";
import {Link} from "react-router-dom";

function Choosekitchen ({title, image, description}) {
    return (
        <>
            <Link to="kies-je-keuken">
                <article>
                    <p>{title}</p>
                    <img src={image} alt={description} />
                </article>
            </Link>
        </>

    );
}

export default Choosekitchen;

import React from "react";
import {Link} from "react-router-dom";

function WhatsInYourFridge({title, image, description}) {
    return (
        <>
            <Link to="wat-kan-ik-maken">
                <article>
                    <p>{title}</p>
                    <img className="size" src={image} alt={description}/>
                </article>
            </Link>
        </>

    );
}

export default WhatsInYourFridge;
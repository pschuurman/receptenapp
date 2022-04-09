import React from "react";

import {Link} from "react-router-dom";

function CookOnTime ({title, image, description}) {
    return (
        <>
            <Link to="kook-op-tijd">
                <article>
                    <p>{title}</p>
                    <img src={image} alt={description} />
                </article>
            </Link>
        </>

    );
}

export default CookOnTime;

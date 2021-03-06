import React, { useState } from 'react';

function SearchBarAllergen({setAllergenHandler}) {
    const [allergen, setAllergen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setAllergenHandler(allergen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={allergen}
                onChange={(e) => setAllergen(e.target.value)}
                placeholder="Welk allergeen mag er niet in"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBarAllergen;
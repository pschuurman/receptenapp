import React, { useState } from 'react';

// Added state variable location to App.js
// Passed state-setter-function as callback prop to SearchBar in App.js

function SearchBar({ setIngredientsHandler }) {
    const [ingredient, setIngredient] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setIngredientsHandler(ingredient);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Vul je ingredienten in"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;
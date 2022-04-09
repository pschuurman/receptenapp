import React, { useState } from 'react';

// Added state variable location to App.js
// Passed state-setter-function as callback prop to SearchBar in App.js

function SearchBarKitchen({setKitchenHandler}) {
    const [kitchen, setKitchen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setKitchenHandler(kitchen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="Vul je favourite keuken in"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBarKitchen;


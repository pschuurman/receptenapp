import React, {useState} from 'react';

function SearchBarKitchenFridge({setKitchenHandler}) {
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
                placeholder="Wat heb je nog in koelkast?"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBarKitchenFridge;


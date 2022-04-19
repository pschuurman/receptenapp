import React, {useState} from 'react';

function SearchBar({setFavoriteKitchenHandler}) {
    const [kitchen, setKitchen] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setFavoriteKitchenHandler(kitchen);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="Vul je favoriete keuken in"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;
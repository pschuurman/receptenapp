import React, {useState} from 'react';

function SearchBarKitchen({setMoodHandler}) {
    const [mood, setMood] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setMoodHandler(mood);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Waar heb je trek in?"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBarKitchen;
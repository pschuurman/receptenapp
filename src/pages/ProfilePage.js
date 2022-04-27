import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p>Gebruikersnaam:</p>
                <p><strong>Email:</strong> hardcoded@test.com</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <p>jouw persoonlijke informatie</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default ProfilePage;
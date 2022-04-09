import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllergyFreePage from './pages/AllergyFreePage';
import ChooseKitchenPage from './pages/ChooseKitchenPage';
import MoodForFoodPage from './pages/MoodForFoodPage';
import SurpriseMePage from './pages/SupriseMePage';
import WhatsInYourFridgePage from './pages/WhatsInYourFridgePage';
import LoginPage from './pages/LoginPage';
import CookOnTimePage from "./pages/CookOnTimePage";


function App () {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/kies-je-keuken">
                <ChooseKitchenPage   />
            </Route>
            <Route path="/wat-kan-ik-maken">
                <WhatsInYourFridgePage />
            </Route>
            <Route path="/voor-elke-stemming-iets">
                <MoodForFoodPage />
            </Route>
            <Route path="/laat-je-verrassen">
                <SurpriseMePage />
            </Route>
            <Route path="/kook-allergenenvrij">
                <AllergyFreePage />
            </Route>
            <Route path="/kook-op-tijd">
                <CookOnTimePage />
            </Route>
            <Route path="/inloggen">
                <LoginPage />
            </Route>
        </Switch>

    );
}

export default App;
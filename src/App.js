import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllergyFreePage from './pages/AllergyFreePage';
import ChooseKitchenPage from './pages/ChooseKitchenPage';
import MoodForFoodPage from './pages/MoodForFoodPage';
import SurpriseMePage from './pages/SupriseMePage';
import WhatsInYourFridgePage from './pages/WhatsInYourFridgePage';
import LoginPage from './pages/LoginPage';
import CookOnTimePage from "./pages/CookOnTimePage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import {AuthContext} from "./context/AuthContext";

function App () {
    const { isAuth } = useContext(AuthContext);

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
            <Route path="/aanmelden">
                <RegisterPage />
            </Route>
            <Route path="/profiel">
                {isAuth ?  <ProfilePage /> : <Redirect to="/" />}
            </Route>
        </Switch>

    );
}

export default App;
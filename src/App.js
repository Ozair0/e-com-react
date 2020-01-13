import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;

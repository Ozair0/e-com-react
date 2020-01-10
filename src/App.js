import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage";

const HatPage = () => (
    <div>
        <h1>Hats</h1>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/hats' component={HatPage}/>
            </Switch>
        </div>
    );
}

export default App;

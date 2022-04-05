import React from "react";
import { Switch ,Route } from 'react-router-dom';
import Single from "./templates/Single";
import Home from "./templates/Home";
import Contato from "./templates/Contato";
import Portfolio from "./templates/Portfolio";


export default () =>{
    return(
        <Switch>
            <Route exact path="/page/:slug?" component={Single}></Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contato" component={Contato}></Route>
        </Switch>
    )
}
import React from "react";
import { Route, Switch } from "react-router-dom";  

//components
import Main from "./components/main";
import Contact from "./components/contact";
import Thanks from "./components/thanks";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thanks/:name" component={Thanks} />
    </Switch>
)

export default Routes;
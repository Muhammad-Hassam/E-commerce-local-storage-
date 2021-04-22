import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Men from "../pages/Men_Collection";
import Women from "../pages/Women_Collection";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Add_items from "../pages/Add_Items";
import Cart_items from "../pages/Add_carts";
import { Switch, Route } from "react-router-dom";

const Routers=()=>{
 
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/about' component={About}/>
        <Route  path='/men' component={Men}/>
        <Route  path='/women' component={Women}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/additems' component={Add_items}/>
        <Route path='/cartitems' component={Cart_items}/>


    </Switch>
    );
}
export default Routers;
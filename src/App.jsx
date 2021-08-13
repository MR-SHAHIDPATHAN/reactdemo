import React from 'react';
import { Route, Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import Footer from './Footer';



const App = () =>{

    return (
        
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Service" component={Service}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
        
        </Switch>
        <Footer/>
        
        </>
        )
}

export default App;
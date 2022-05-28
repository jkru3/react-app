import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from './AboutComponent'
import Home from './HomeComponent'

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

function Main () {
    return(
        <>  
            <Header/>
            <form search ="http://localhost:3000/home" method="GET">
              <input type="text" name="name" placeholder="Name">
                  
              </input>
            </form>
            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Redirect to='/home'/>
            </Switch>

            <Footer/>
        </>  
    )
}

export default withRouter(Main);
import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavigationBar.js'
import Noti from './Notification.js'
import Home from './Home.js'
import About from './about/About.js'

function Main(){
    return(
        <div>
            <NavBar/> 
            <Noti/>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
        </div>
    )
}


export default Main;





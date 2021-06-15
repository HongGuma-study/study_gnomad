import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Route } from 'react-router-dom';
import Axios from 'axios';

import NavBar from './NavigationBar.js'
import Noti from './Notification.js'
import Home from './Home.js'
import About from './about/About.js'

function Main(){
    /*
    useEffect(()=>{
        Axios.get('/list',{validateStatus: false})
            .then(res=>console.log(res))
            .catch(error=>console.log("this is error!"+error));
    })
    */

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





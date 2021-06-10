
import React from 'react';
import { Route,Link } from 'react-router-dom';

import './css/App.css';

import SearchBox from './SearchBox.js';

const NavBar = () =>{
    return(
        <div className="nav-wrap">
            <div className="nav-logo">
                <Link to='/'>EMPLOYEES</Link>
            </div>
            <div className="nav-search-box">
                <SearchBox />
            </div>
            <div calssName="nav-menu">
                <ul>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/News">News</Link>
                    </li>
                    <li>
                        <Link to="/Downloads">Downloads</Link>
                    </li>
                    <li>
                        <Link to="/Terna">Terna</Link>
                    </li>
                    <li>
                        <Link to="/Publication">Publication</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Changelog">Changelog</Link>
                    </li>
                    <li>
                        <Link to="/Help">Help</Link>
                    </li>
                </ul>   
            </div>
        </div>
    )
}

export default NavBar
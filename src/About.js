import React from 'react';

import aboutContent from './about/about.md';

function About(){
    return(
        <div className = "about-wrap">
            <h1>About gnomAD</h1>
            <hr/>
            <div dangerouslySetInnerHTML={{__html:aboutContent.html}}/>
            
        </div>
    );
};

export default About;
import React from 'react';
import Markdown from 'markdown-to-jsx'

import aboutContent from './about.md';

class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = { md: '' }
    }
    componentWillMount() {
        fetch(aboutContent)
          .then((res) => res.text())
          .then((md) => {
            this.setState({ md })
        })
    }
    render(){
        return(
            <div className = "about-wrap">
                <h1>About gnomAD</h1>
                <hr/>
                <div>
                    <Markdown children={this.state.md}/>
                </div>
            </div>
        );
    }
}
export default About;
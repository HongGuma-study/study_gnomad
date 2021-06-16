import React from 'react';
import Markdown from 'markdown-to-jsx'

import aboutContent from './about.md';
import shortWord from './short_word.md';


function slice(shortW){
    return shortW.split('/');
}

class About extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            about: '',
            shortW: '',
        }
    }
    //md 파일 읽어오기
    UNSAFE_componentWillMount() {
        fetch(aboutContent)
          .then((res) => res.text())
          .then((about) => {
            this.setState({ about })
        })
        fetch(shortWord)
            .then((res) => res.text())
            .then((shortW) => {
                this.setState({shortW})
            })
    }
    render(){
        const words = slice(this.state.shortW);
        
        return(
            <div className = "about-wrap">
                <h1>About gnomAD</h1>
                <hr/>
                <div>
                    <Markdown children={this.state.about}/>
                </div>
                <div id="about-list-wrap">
                    <h1>Short Word</h1>
                    <ul>
                        {words.map(word =>(
                            <li>{word}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default About;
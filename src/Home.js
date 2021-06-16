import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx'

import './css/App.css';
import img from './image/training.png';
import homeBodyText from './home.md';

function Home(){
    const [bodyText, setBodyText] = useState(null);
    const [emps, setEmp] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetch = async () => {
            try{
                setError(null);
                setEmp(null);
                setLoading(true);
                const dbRes = await Axios.get('http://localhost:4001/list');
                setEmp(dbRes.data);
                const mdRes = await Axios.get(homeBodyText);
                setBodyText(mdRes.data)
            }catch(e){
                setError(e);
            }
            setLoading(false);
        };
        fetch();
    },[]);

    

    if(loading) return <div> loading... </div>;
    if(error) return <div> error!</div>;
    if(!emps) return null;
    
    return(
        <div className="home">
            <p>Ipsum tempor dolore labore cupidatat commodo incididunt nulla officia anim incididunt ipsum ut.</p>
            <div className="home-img">
                <img src={img} alt="homeImg"/>
            </div>
            <div className="img-link">
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div className="ex-txt-box">
                <p>Examples</p>
                <ul>
                    {emps.map(emp=>(
                        <div key={emp.emp_no}>
                            <li>
                                emp_no: {emp.emp_no}
                            </li>
                            <li>
                                dept_no: {emp.dept_no}
                            </li>
                            <li>
                                from_date: {emp.from_date}
                            </li>
                            <li>
                                to_date: {emp.to_date}
                            </li>
                        </div>
                    ))}
                </ul>
                <div>
                    <Markdown children={bodyText}/>
                </div>
            </div>
            
        </div>
    );
}


export default Home
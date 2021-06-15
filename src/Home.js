import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import './css/App.css';
import img from './image/training.png';

function Home(){
    const [emps, setEmp] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetch = async () => {
            try{
                setError(null);
                setEmp(null);
                setLoading(true);
                const response = await Axios.get('http://localhost:4001/list');
                setEmp(response.data);
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
                <img src={img}/>
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
            </div>
            <p>
                Enim cillum sunt sint aute. Mollit consequat ea nostrud duis cillum aute amet. Elit cupidatat eu ullamco duis mollit pariatur velit. Officia adipisicing ipsum reprehenderit voluptate ut.

Qui officia irure tempor nulla occaecat ea aliquip quis proident nostrud est proident officia magna. Ipsum minim anim nulla fugiat ullamco culpa quis. Voluptate incididunt non consequat ea cillum aute qui sit. Tempor veniam mollit fugiat sint aliquip do reprehenderit laborum non laboris adipisicing. Laboris do aute ullamco non aliqua. Mollit officia ut sunt reprehenderit incididunt mollit sint non magna incididunt.

Commodo eiusmod ad Lorem pariatur esse magna. In deserunt aute occaecat pariatur duis cillum nisi nisi occaecat sint aliquip nisi. Deserunt adipisicing reprehenderit occaecat exercitation do irure occaecat deserunt aliqua laborum. Consequat ipsum voluptate elit non nostrud et sunt commodo ex incididunt velit.

Excepteur excepteur exercitation in et sit amet velit magna magna esse magna ut commodo irure. Veniam id ea sint aliquip nostrud dolore consectetur officia quis amet dolore consequat in. Do magna consequat sint id velit voluptate officia sint veniam. Exercitation pariatur laborum eu cillum irure enim tempor. Tempor eu laborum consequat officia enim qui incididunt ea laboris tempor occaecat quis ea pariatur. Nulla incididunt nisi consectetur officia irure sunt reprehenderit. Velit cillum amet velit occaecat aliquip tempor voluptate nulla labore elit sit.

Eiusmod id ut ex non labore minim labore officia incididunt. Labore labore est Lorem incididunt elit consectetur pariatur in. Excepteur sint non reprehenderit consectetur.

Occaecat qui enim magna incididunt voluptate ullamco laborum. Id ea esse nostrud aliqua amet velit irure. Occaecat consequat culpa eu proident sunt pariatur. Cupidatat in in velit nulla pariatur tempor mollit deserunt amet reprehenderit magna incididunt magna. Labore velit enim ad consectetur minim sint exercitation nisi exercitation mollit id officia. Ipsum commodo deserunt ad labore veniam. Mollit non exercitation consequat reprehenderit aliquip do laboris elit elit ea amet tempor reprehenderit.
            </p>
            <p>
                Officia sunt cupidatat aliquip adipisicing ex do fugiat consectetur esse. Ipsum incididunt incididunt ullamco eiusmod pariatur eiusmod non qui aliqua eu aliquip commodo irure culpa. Est deserunt adipisicing proident amet labore veniam officia voluptate eiusmod irure Lorem laborum. Laborum ex cillum consectetur cillum officia aliqua mollit. Ullamco culpa eiusmod in fugiat. Officia consectetur officia fugiat in voluptate velit mollit minim.
            </p>
        </div>
    );
}


export default Home
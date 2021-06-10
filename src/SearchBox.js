import React from 'react';
import './css/App.css';

class SearchBox extends React.Component{
    render(){
        return (
            <div className="search-wrap">
                <select>
                    <option value='current_dept_emp'>current_dept</option>
                    <option value='departments'>departments</option>
                    <option value='dept'>dept</option>
                    <option value='dept_latest_date'>latest_date_dept</option>
                    <option value='dept_manager'>dept_manager</option>
                    <option value='employees'>employees</option>
                    <option value='salaries'>salaries</option>
                    <option value='titles'>titles</option>
                </select>
                <input type="text"/>
            </div>
            
        )
    }

}

export default SearchBox
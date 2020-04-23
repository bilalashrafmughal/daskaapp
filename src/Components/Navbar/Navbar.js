import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <nav className="Navbar">
                <div className="Nav-logo">
                    <h2><i className="fas fa-cat"></i> Daska Yorn</h2>
                </div>
                <ul className="Nav-list">
                    <NavLink exact activeClassName="active-link" to="/">Search</NavLink>   
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;
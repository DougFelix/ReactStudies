import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import pop from './img/pop.png';
import './dist/food.css';

class Pop extends Component {
    render() { 
        return (
            <div className='Food'>
                <div className="snowContainer">
                    <img className='drop1 snowExample' alt="snowflakes" src={pop}/>
                    <img className='drop2 snowExample' alt="snowflakes" src={pop}/>
                    <img className='drop3 snowExample' alt="snowflakes" src={pop}/>
                    <img className='drop4 snowExample' alt="snowflakes" src={pop}/>
                    <img className='drop5 snowExample' alt="snowflakes" src={pop}/>
                    <img className='drop6 snowExample' alt="snowflakes" src={pop}/>
                </div>
                <nav className='back'>
                    <NavLink exact activeClassName='navActive' to='/'>BACK</NavLink>
                </nav>
            </div>
        );
    }
}
 
export default Pop;
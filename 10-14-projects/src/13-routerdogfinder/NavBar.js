import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
 
class NavBar extends Component {

    render() {
        const {dogs} = this.props;
        const navbar = dogs.map(dog => 
            <NavLink key={dog.name} exact className='newA' activeClassName='navActive' to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
        )

        return (
            <div>
                <nav className='newNav navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className='navbar-brand' href='/dogs' >DOG FINDER</a>
                    <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-expanded='false'
                    aria-controls='navbarNav'
                    aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink exact className='newA' activeClassName='navActive' to={`/dogs`}>Home</NavLink>
                            {navbar}
                        </ul>
                    </div>
                </nav>
    
            </div>
        );
    }
}
 
export default NavBar;
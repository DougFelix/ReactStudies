import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Snack from './Snack';
import Pop from './Pop';
import Sandwich from './Sandwich';
import './VendingMachine.css';
import vendingmachine from './img/vendingmachine.png';

const Machine = () => <img className='Machine' src={vendingmachine} alt='vendingmachine'/>;

class VendingMachine extends Component {

    render() { 
        return (
            <div className='VendingMachine'>
                <nav className="go">
                    <NavLink exact activeClassName='navActive' to='/sandwich'>SANDWICH</NavLink>
                    <NavLink exact activeClassName='navActive' to='/pop'>POP</NavLink>
                    <NavLink exact activeClassName='navActive' to='/snack'>SNACK</NavLink>
                </nav>
                <Switch>
                    <Route exact path='/' render={() => <Machine />} />
                    <Route exact path='/snack' render={() => <Snack />} />
                    <Route exact path='/pop' render={() => <Pop />} />
                    <Route exact path='/sandwich' render={() => <Sandwich />} />
                </Switch>
            </div>
        )
    }
}
 
export default VendingMachine;
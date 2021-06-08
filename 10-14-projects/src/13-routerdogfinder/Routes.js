import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Dog from './Dog';
import Home from './Home';

class Routes extends Component {
    
    render() { 
        const {dogs} = this.props;
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            if(currentDog !== undefined) {
                return <Dog dog={currentDog} {...props} />
            } else{
                return <Redirect to="/dogs" />
            }
        };

        return (
            <Switch>
                <Route exact path={`/dogs`} render={() => <Home dogs={dogs}/>} />
                <Route exact path={`/dogs/:name`} render={getDog} />
                {/* CATCH NON EXISTING ROUTES */}
                <Redirect to='/dogs' />
            </Switch>
        );
    }
}
 
export default Routes;
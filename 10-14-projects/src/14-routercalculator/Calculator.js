import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Result from './Result';


class Calculator extends Component {
    render() { 
        return (
            <div>
                <Switch>
                    <Route exact path={`/:calc/:x/:y`} render={(routeProps) => <Result {...routeProps} />} />
                    <Route component={Result} />
                </Switch>
            </div>
        );
    }
}
 
export default Calculator;
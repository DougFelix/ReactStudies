import React, { Component } from 'react';
import Palette from './Components/Palette';
import seedColors from './Components/seedColors';
import { generatePalette } from './Components/colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette goes here</h1>} />
        <Route 
          exact 
          path='/palette/:id' 
          render={routeProps => 
            <Palette pallete={generatePalette(
              this.findPalette(routeProps.match.params.id))}
            />
          }
        />
      </Switch>
    );
  }
}
 
export default App;
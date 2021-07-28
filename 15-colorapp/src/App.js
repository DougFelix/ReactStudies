import React, { Component } from 'react';
import Palette from './Components/Palette';
import seedColors from './Components/seedColors';
import { generatePalette } from './Components/colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual Palette</h1>} />
      </Switch>
      // <div>
      //   <Palette pallete={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}
 
export default App;
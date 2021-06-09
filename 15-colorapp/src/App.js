import React, { Component } from 'react';
import Palette from './Components/Palette';
import seedColors from './Components/seedColors';

class App extends Component {
  render() { 
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}
 
export default App;
import React, { Component } from 'react';
import Palette from './Components/Palette';
import seedColors from './Components/seedColors';
import { generatePalette } from './Components/colorHelpers';

class App extends Component {
  render() {
    return (
      <div>
        <Palette pallete={generatePalette(seedColors[4])} />
      </div>
    );
  }
}
 
export default App;
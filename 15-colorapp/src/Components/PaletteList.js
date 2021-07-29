import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette  from './MiniPalette';

class PaletteList extends Component {

    render() { 
        const {palettes} = this.props;
        return (
            <div>
                <MiniPalette />
                <h1>React Colors</h1>
                {palettes.map(palette =>
                    <Link key={palette.id} to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                )}
            </div>
        );
    }
}
 
export default PaletteList;
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox key={color.color} background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                {/* Navbar goes here */}
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        );
    }
}
 
export default Palette;
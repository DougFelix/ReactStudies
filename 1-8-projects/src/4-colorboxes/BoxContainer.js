import React, { Component } from 'react';
import Box from '../4-colorboxes/Box';
import '../4-colorboxes/BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        allColors: ['purple', 'magenta', 'violet', 'pink', 'red', 'green', 'blue', 'yellow', 'grey', 'orange'],
        numSquares: 20
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const boxes = Array.from({length: this.props.numSquares}).map(
            () => <Box allColors={this.props.allColors} />
        )
        return (
            <div className='BoxContainer'>
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;
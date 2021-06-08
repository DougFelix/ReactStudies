import React, { Component } from 'react';

class Coin extends Component {
    render() { 
        return (
            <div>
                <img width='100' src={
                    this.props.heads
                    ? 'https://tinyurl.com/react-coin-heads-jpg'
                    : 'https://storage.googleapis.com/tallysight_social_images/Entity_1612539085984.png'
                } alt="Coin flip"></img>
            </div>
        );
    }
}

export default Coin;
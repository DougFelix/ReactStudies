import React, { Component } from 'react';
import Coin from '../3-coinflipper/Coin';
class Flipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            heads: null,
            hCount: 0,
            tCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        let coin = Math.random() < 0.5;
        console.log(coin);
        this.setState({heads: coin});
        this.setState(st => coin ? {hCount: st.hCount + 1} : {tCount: st.tCount + 1});
    }
    handleClick(e){
        this.flipCoin();
    }

    render() { 
        return (
            <div>
                <h2>Let's flip a coin!</h2>
                <Coin heads={this.state.heads} />
                <button onClick={this.handleClick}>Flip</button>
                <p>Out of {this.state.hCount + this.state.tCount} flips, there have been {this.state.hCount} heads and {this.state.tCount} tails.</p>
            </div>
        );
    }
}

export default Flipper;
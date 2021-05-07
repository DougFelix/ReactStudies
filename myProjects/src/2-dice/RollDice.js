import React, { Component } from 'react'
import Die from '../2-dice/Die';
import '../2-dice/RollDice.css';

class RollDice extends Component {
    // const
    constructor(props) {
        super(props);
        this.state = {
            dice1 : 1,
            dice2 : 2,
            rolling : false
        }
        this.rollDice = this.rollDice.bind(this);
    }
    
    rollDice(e) {
        let d1 = Math.floor(Math.random() * 6)+1;
        let d2 = Math.floor(Math.random() * 6)+1;
        this.setState({dice1 : d1, dice2 : d2, rolling: true});
        setTimeout(()=> this.setState({rolling: false}), 1200);
    }

    render() {
        let btn;
        if (!this.state.rolling) {
            btn = <button className='btn btn-outline-dark' onClick={this.rollDice}>Roll dices!</button>;
        } else {
            btn = <button disabled className='btn btn-secondary' onClick={this.rollDice}>Rolling...</button>;
        }
        return (
            <div className='RollDice'>
                <div className='RollDice-Dices'>
                    <Die rolling={this.state.rolling} num={this.state.dice1} />
                    <Die rolling={this.state.rolling} num={this.state.dice2} />
                </div>
                {btn}
            </div>
        )
    }
}

export default RollDice;

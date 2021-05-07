import React, { Component } from 'react'
import '../2-dice/Die.css';

export default class Die extends Component {

    render() {
        let diceNumber;
        switch (this.props.num) {
            case 1:
                diceNumber = 'one';
                break;
            case 2:
                diceNumber = 'two';
                break;
            case 3:
                diceNumber = 'three';
                break;
            case 4:
                diceNumber = 'four';
                break;
            case 5:
                diceNumber = 'five';
                break;
            case 6:
                diceNumber = 'six';
                break;
            default:
                diceNumber = 'one';
                break;

        }
        return (
            <div className='Die'>
                <i className={`fas fa-dice-${diceNumber} `+ (this.props.rolling && 'Die-Rolling')}></i>
            </div>
        )
    }
}

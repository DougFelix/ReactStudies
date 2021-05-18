import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        let angle = Math.random() * 90 - 45;
        let xPox = Math.random() * 40 - 20;
        let yPox = Math.random() * 40 - 20;
        this._transform = `translate(${xPox}px, ${yPox}px) rotate(${angle}deg)`;
    }
    render() { 
        let {img} = this.props;
        
        return (
            <img 
            style={{transform: this._transform}} 
            key={img.code} 
            src={img.image} 
            alt={img.code}
            ></img>
        );
    }
}
 
export default Card;
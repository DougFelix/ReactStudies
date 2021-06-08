import React, { Component } from 'react';
import '../1-pokegame/Pokecard.css';

// Function to fill with zeros the Pokemon ID
let add_zero = (number) => {
    var newnumber = ''+number;
    while(newnumber.length < 3) {
        newnumber = '0'+newnumber;
    }
    return newnumber;
}

let POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard ml-4 mr-4 mb-3">
                {/* Passing prop info to render */}
                <div className="Pokecard-name">{this.props.name}</div>
                {/* Calling add_zero function to correct Pokemon ID and using it in URL*/}
                <img className="Pokecard-img" src={`${POKE_API}${add_zero(this.props.id)}.png`} alt="Pokecard"></img>
                <div className="Pokecard-info">Type: {this.props.type}</div>
                <div className="Pokecard-info">EXP: {this.props.base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;
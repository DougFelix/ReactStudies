import React, { Component } from 'react';
import Pokecard from '../1-pokegame/Pokecard';
import '../1-pokegame/Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        isWinner : 'DRAW!'
    }

    render() {

        // PASSING POKEMON LIST USING AN ARRAY OF POKECARDS
        // const pokelist = [];
        // for (let i = 0; i < this.props.pokemon.length; i++) {
        //     // Adding each pokecard to list for rendering
        //     pokelist.push(
        //         <Pokecard
        //         // passing props values
        //             key={i}
        //             id = {this.props.pokemon[i].id}
        //             name= {this.props.pokemon[i].name}
        //             type= {this.props.pokemon[i].type}
        //             base_experience= {this.props.pokemon[i].base_experience}
        //         />
        //     )
        // }

        return (
            <div className="Pokedex">
                <h2 className={this.props.isWinner ? 'win' : 'lose'} >{this.props.isWinner ? 'THIS HAND WINS!' : 'THIS HAND LOSE!'}</h2>
                <h4>Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {/* PASSING POKEMON LIST USING MAP */ }
                    {this.props.pokemon.map((p) => (
                        <Pokecard
                        // passing props values
                            id = {p.id}
                            name= {p.name}
                            type= {p.type}
                            base_experience= {p.base_experience}
                        />
                    ))}
                    {/* {pokelist} */}
                </div>
                {/* Check if this pokedex won or lose*/ }
               
            </div>
        );
    }
}

export default Pokedex;
import Pokedex from "../1-pokegame/Pokedex";
import React, { Component } from 'react'

class Pokegame extends Component {
    render() {
        // define list of pokemons
        let pokelist = [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    
        // declaring array of hands
        let hand1 = [];
        let hand2 = [];
        // declaring variable to sum base exp of each hand
        let hand1_exp = 0;
        let hand2_exp = 0;
    
        while(pokelist.length > 0){
            // Select random number based in pokelist length
            let rn = Math.floor(Math.random()*pokelist.length);
            // insert in hand 1 while it is not full, 4 cards
            if (hand1.length < 4) {
                // Add selected card to hand
                hand1.push(pokelist[rn]);
                // Summing its base exp
                hand1_exp += pokelist[rn].base_experience;
                // Deleting it from pokelist to avoid repeated cards
                pokelist.splice(rn, 1);
            // insert the rest of the cards in hand 2    
            } else {
                // Add selected card to hand
                hand2.push(pokelist[rn]);
                // Summing its base exp
                hand2_exp += pokelist[rn].base_experience;
                // Deleting it from pokelist to avoid repeated cards
                pokelist.splice(rn, 1);
            }
        }
        // 
        let winning = (hand1_exp > hand2_exp) ? true : false;

        return (
            <div>
                {/* Rendering each hand and checking which one is the winner */}
                <Pokedex pokemon={hand1} exp={hand1_exp} isWinner={winning} />
                <hr></hr>
                <Pokedex pokemon={hand2} exp={hand2_exp} isWinner={!winning}/>
            </div>
        )
    }
}

export default Pokegame;
import React, { Component } from 'react'
import axios from 'axios';
import './Table.css';
import Card from './Card.js';

const API_DECK = 'https://deckofcardsapi.com/api/deck/new/shuffle';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            cards: []
        }
        this.draw = this.draw.bind(this);
    }
    async componentDidMount(){
        let deck = await axios.get(API_DECK);
        this.setState({deck_id: deck.data.deck_id});
    }

    async draw(){
        try {
            let card = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`);
            
            if(!card.data.success){
                throw new Error('No cards left');
            }
            let newCard = card.data.cards[0];
            this.setState(st => ({cards: [...st.cards, newCard]}))
        }
        catch (err) {
            alert(err);
        }
    }

    render() { 
        return (
            <div className='Table'>
                <h1 className='Table-Title'>⚜ CARD DEALEAR ⚜</h1>
                <button className='Table-btn' onClick={this.draw}>DRAW</button>
                <div className='Table-Deck'>
                    {this.state.cards.map(img => (<Card key={img.code} img={img} />))}
                </div>
            </div>
        );
    }
}
 
export default Table;
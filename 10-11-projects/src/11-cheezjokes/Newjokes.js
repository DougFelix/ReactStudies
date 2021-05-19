import React, { Component } from 'react';
import axios from 'axios';
import './Newjokes.css';

class Newjokes extends Component {

    constructor(props){
        super(props);
        this.seenJokes = new Set(this.props.jokes.map(i => i.joke));
        console.log(this.seenJokes);
    }

    async getJokes(oldJokes){
        try {
            let jokes = [...oldJokes];
            let count = 0;
            while(count < 10){
                let data = await axios.get('https://icanhazdadjoke.com/', {
                    headers: {Accept:'application/json'}
                });
                let dadjoke = data.data.joke;
                if(!this.seenJokes.has(dadjoke)) {
                    jokes.push(
                        {
                            like: 0,
                            joke: dadjoke
                        }
                    );
                    this.seenJokes.add(dadjoke);
                    count++;
                }
            }
            return jokes;
        } catch (e) {
            alert(e);
            return this.props.jokes;
        }
    } 
    componentDidMount(){
        if(Array.isArray(this.props.jokes) && this.props.jokes.length === 0) {
            this.getJokes(this.props.jokes)
            .then(jokes => {
                this.props.newJokes(jokes);
            })
        } else {  
            this.props.loading();
        }
    }

    handleClick = () => {
        this.props.loading();
        this.getJokes(this.props.jokes)
        .then(jokes => {
            this.props.newJokes(jokes);
        })
        
    }

    render() { 
        return (
            <div className='Newjokes'>
                <h2 className="Newjokes-title">
                    <span>Dad</span> Jokes
                </h2>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='emoji'/>
                <button className="Newjokes-getmore" onClick={this.handleClick} disabled={this.props.loaded} >Fetch Jokes</button>
            </div>
        );
    }
}
 
export default Newjokes;
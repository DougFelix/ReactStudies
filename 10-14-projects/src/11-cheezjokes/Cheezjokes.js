import React, { Component } from 'react';
import Newjokes from './Newjokes';
import Jokelist from './Jokeslist';
import './Cheezjokes.css';

class Cheezjokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(localStorage.getItem('@list-jokes') || '[]'),
            loading: true
        }
        this.handleNewJokes = this.handleNewJokes.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleLoading = this.handleLoading.bind(this);
    }

    handleLoading() {
        this.setState(st => ({loading: !st.loading}));
    }
    
    handleNewJokes(jokes){
        this.setState(
            {
                jokes: jokes,
                loading: false
            }, () => localStorage.setItem('@list-jokes', JSON.stringify(jokes))
        // localStorage.removeItem('@list-jokes');
        )
    }


    handleLike(liked){
        let jokes = this.state.jokes.map(i => {
            if(i.joke === liked.joke) {
                return liked;
            }
            return i;
        });

        this.setState(
            {
                jokes: jokes
            }, () => localStorage.setItem('@list-jokes', JSON.stringify(jokes))
        );
        // localStorage.removeItem('@list-jokes');
    }

    render() { 
        return (
            <div className="Cheezjokes">
                <Newjokes loaded={this.state.loading} loading={this.handleLoading} jokes={this.state.jokes} newJokes={this.handleNewJokes} />
                <Jokelist liked={this.handleLike} jokes={this.state.jokes} loading={this.state.loading} />
            </div>
        );
    }
}

export default Cheezjokes;
import React, { Component } from 'react';
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';
import './Jokelist.css';

class Jokelist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        
        let sortJokes = this.props.jokes.sort((a, b) => b.like - a.like);
        let jokes = sortJokes.map(joke => ( 
            <Joke liked={this.props.liked} key={uuidv4()} joke={joke} />
        ));
        return (
            <div className='Jokelist'>
                {this.props.loading
                ? (
                <div>
                    <div className="container">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                ) : (
                <div>
                    {jokes}
                </div>
                )}
            </div>
        );
    }
}
 
export default Jokelist;
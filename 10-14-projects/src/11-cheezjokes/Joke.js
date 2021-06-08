import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

    getColor(){
        if(this.props.joke.like >= 15){
            return {color: "#4caf50", cl: "em em-rolling_on_the_floor_laughing"};
        } else if(this.props.joke.like >= 12){
            return {color: "#8bc34a", cl: "em em-laughing"};
        } else if(this.props.joke.like >= 9){
            return {color: "#cddc39", cl: "em em-smiley"};
        } else if(this.props.joke.like >= 6){
            return {color: "#ffeb38", cl: "em em-slightly_smiling_face"};
        } else if(this.props.joke.like >= 3){
            return {color: "#FFC107", cl: "em em-neutral_face"};
        } else if(this.props.joke.like >= 0){
            return {color: "#ff9800", cl: "em em-confused"};
        } else {
            return {color: "#f44336", cl: "em em-angry"};
        }
    }

    upVote(){
        let newLike = {
            joke: this.props.joke.joke,
            like: this.props.joke.like + 1
        }
        this.props.liked(newLike);
    }

    downVote(){
        let newLike = {
            like: this.props.joke.like - 1,
            joke: this.props.joke.joke
        }
        this.props.liked(newLike);
    }

    render() { 
        return (
            <div className='Joke'>
                <div className="Joke-buttons">
                    <i onClick={() => this.upVote()} className="fas fa-arrow-up"></i>
                    <span className="Joke-votes" style={{borderColor: this.getColor().color}}>{this.props.joke.like}</span>
                    <i onClick={() => this.downVote()} className="fas fa-arrow-down"></i>
                </div>
                <div className='Joke-txt'>
                    {this.props.joke.joke}
                </div>
                <div className='Joke-smiley'><i className={this.getColor().cl}></i></div>
            </div>
        );
    }
}
 
export default Joke;
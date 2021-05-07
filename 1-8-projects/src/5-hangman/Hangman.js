import React, { Component } from "react";
import {randomWord} from '../5-hangman/words';
import AlphaButtons from "../5-hangman/AlphaButtons";
import img0 from "../5-hangman/img/0.jpg";
import img1 from "../5-hangman/img/1.jpg";
import img2 from "../5-hangman/img/2.jpg";
import img3 from "../5-hangman/img/3.jpg";
import img4 from "../5-hangman/img/4.jpg";
import img5 from "../5-hangman/img/5.jpg";
import img6 from "../5-hangman/img/6.jpg";
import "../5-hangman/Hangman.css";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** handleClick: handle the restart button:
    - reset the game
    - new word
  */
  reset() {
    this.setState(st => ({ nWrong: 0, guessed: new Set(), answer: randomWord() }));
  }

  /** render: render game */
  render() {
    const gameover = this.state.nWrong >= this.props.maxWrong;
    const youWin = this.guessedWord().join('') === this.state.answer;
    const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
    // Setting conditional game state
    let gameState = <AlphaButtons
                      HandleGuess={this.handleGuess}
                      guessed={this.state.guessed}
                      letters='abcdefghijklmnopqrstuvwxyz'
                    />;
    if (youWin) gameState = <p className='Hangman-Win'>YOU WIN.</p>;
    if (gameover) gameState = <p className='Hangman-Lose'>You lose.</p>;

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText}/>
        <p className='Hangman-word'>{!gameover ? this.guessedWord() : this.state.answer}</p>
        <p>Number wrong: <strong>{this.state.nWrong}</strong>.</p>
        { gameState }
        <button id='Hangman-Reset' onClick={this.reset}>Restart</button>
      </div>
    );
  }
}

export default Hangman;

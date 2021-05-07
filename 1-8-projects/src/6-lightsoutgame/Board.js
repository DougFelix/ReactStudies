/* eslint-disable no-loop-func */
import React, {Component} from "react";
import Cell from "../6-lightsoutgame/Cell";
import '../6-lightsoutgame/Board.css';


class Board2 extends Component {
  static defaultProps = {
    // nrows: number of rows of board
    nrows: 5,
    // ncols: number of cols of board
    ncols: 5,
    // chanceLightStartsOn: float, chance any cell is lit at start of game
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    this.state = {
      //hasWon: boolean, true when board is all off
      hasWon: false,
      //board: array-of-arrays of true/false
      board: this.validBoard()
    }
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.restart = this.restart.bind(this);
  }
  // |--------------------+-----------------|
  // | Left on bottom row | Push on top row |
  // |--------------------+-----------------|
  // | 1, 1, 1, 0, 0      |   0, 1, 0, 0, 0 |
  // | 1, 1, 0, 1, 1      |   0, 0, 1, 0, 0 |
  // | 1, 0, 1, 1, 0      |   0, 0, 0, 0, 1 |
  // | 1, 0, 0, 0, 1      |   1, 1, 0, 0, 0 |
  // | 0, 1, 1, 0, 1      |   1, 0, 0, 0, 0 |
  // | 0, 1, 0, 1, 0      |   1, 0, 0, 1, 0 |
  // | 0, 0, 1, 1, 1      |   0, 0, 0, 1, 0 |
  // |--------------------+-----------------|
  validBoard () {
    let board = [];
    for(var i = 0; i < this.props.nrows; i++) {
      board[i] = [];
      for(var j = 0; j < this.props.ncols; j++) {
        board[i][j] = 1;
      }
    }
    let moves = Math.floor(Math.random() * 20)+5; 

    while (moves > 0) {
      let i = Math.floor(Math.random() * this.props.nrows);
      let j = Math.floor(Math.random() * this.props.ncols);
      let coord = `${i}-${j}`;
      board = this.flipCellsAround(coord, board);
      moves = moves - 1;
    }
    
    console.log(board);
    return board;
  }
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  handleClick (coord) {
    let board = this.flipCellsAround(coord, this.state.board)
    this.setState({board: board});

    // win when every cell is turned off
    var hasWon = this.state.board.every(row => row.every(cell => cell === 0));
    hasWon && this.setState({hasWon: hasWon});
  }

  restart(){
    this.setState({
      //hasWon: boolean, true when board is all off
      hasWon: false,
      //board: array-of-arrays of true/false
      board: this.validBoard()
    });
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord, board) {
    let {ncols, nrows} = this.props;
    let [x, y] = coord.split("-").map(Number);
    
    function flipCell(x, y) {
      // if this coord is actually on board, flip it
      if (y >= 0 && y < ncols && x >= 0 && x < nrows) {
        board[x][y] = (board[x][y] === 1) ? 0 : 1;
      }
    }

    flipCell(x, y);
    flipCell(x+1, y);
    flipCell(x-1, y);
    flipCell(x, y+1);
    flipCell(x, y-1);

    return board;
  }
  
  /** Render game board or winning message. */
  render() {
    // if the game is won, just show a winning msg & render nothing else
    // make table board
    let board = []
    for(let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`;
        row.push(<Cell key={coord} Click={this.handleClick} coord={coord} isLit={this.state.board[i][j]} />)
      }
      board.push(<tr key={i}>{row}</tr>);
    }
    
    return (
      <div>
        {this.state.hasWon 
        ? (
          <div className='Board-title'>
            <div className='winner'>
              <span className='neon-orange'>You</span>
              <span className='neon-blue'>Win!</span>
            </div>
          </div> 
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            <table className='Board'>
              <tbody>{board}</tbody>
            </table>
          </div>
        )}
        <button className='Board-Restart' onClick={this.restart}>Reset</button>
      </div>
    );

  }
}

export default Board2;

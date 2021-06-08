import React, { Component } from "react";
import "./Die.css";
import classNames from "classnames";

class Die extends Component {

  static defaultProps = {
    numberWords : ['one','two','three','four','five','six']
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <div
        className={classNames({
          'fa-5x': true,
          'Die': true,
          'Die-locked': this.props.locked,
          'Die-rolling': this.props.rolling && !this.props.locked 
        })}
        onClick={this.handleClick}
      >
        <i className={`fas fa-dice-${this.props.numberWords[this.props.val-1]}`}></i>
      </div>
    );
  }
}

export default Die;

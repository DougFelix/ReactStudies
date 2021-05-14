import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    var active = isNaN(this.props.score);
    return (
      <tr className={active ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"}
          onClick={active ? this.props.doScore : undefined}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
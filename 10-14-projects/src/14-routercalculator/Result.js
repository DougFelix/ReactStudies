import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

    getResult (x, y, calc) {
        switch(calc){
            case 'add':
                return x+y;
            case 'subtract':
                return x-y;
            case 'multiply':
                return x*y; 
            case 'divide':
                return x/y;
            default:
                return 'ERROR';
                
        }
    }

    render() {
        const {x, y, calc} = this.props.match.params;
        let result = this.getResult(parseFloat(x), parseFloat(y), calc);

        return (
            <div>
                <div id="calculator">
                <div className="top">
                    <span className="clear">C</span>
                    <div className="screen">
                        {result}
                    </div>
                </div>
                
                <div className="keys">
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span className={calc === 'add' ? 'activeOperator' : 'operator'}>+</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span className={calc === 'subtract' ? 'activeOperator' : 'operator'}>-</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span className={calc === 'divide' ? 'activeOperator' : 'operator'}>÷</span>
                    <span>0</span>
                    <span>.</span>
                    <span className="eval">=</span>
                    <span className={calc === 'multiply' ? 'activeOperator' : 'operator'}>x</span>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Result;
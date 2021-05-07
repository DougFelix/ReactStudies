import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleX = this.handleX.bind(this);
    }

    handleX(evt){
        this.props.deleteBox(this.props.info.id);
    }

    render() {
        return (
            <div>
                <div style={{backgroundColor: this.props.info.color, height: this.props.info.height, width: this.props.info.width}}>
                    <button onClick={this.handleX}>X</button>
                </div>
            </div>
        );
    }
}
 
export default Box;
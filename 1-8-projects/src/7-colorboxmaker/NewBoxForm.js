import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.HandleAdd(this.state);
        this.setState({width: '', height: '', color: ''});
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='width'>Width</label>
                        <input id='width' name='width' type='text' value={this.state.width} onChange={this.handleChange}></input>    
                    </div>
                    <div>
                        <label htmlFor='height'>height</label>
                        <input id='height' name='height' type='text' value={this.state.height} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='color'>Color</label>
                        <input id='color' name='color' type='text' value={this.state.color} onChange={this.handleChange}></input>
                    </div>
                    <button>Add Box!</button>
                </form>
            </div>
        );
    }
}
 
export default NewBoxForm;
import React, { Component } from 'react';
import '../8-todoapp/NewTodoForm.css';


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState(
            {[evt.target.name]: evt.target.value}
        )
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({todo: ''});
    }

    render() { 
        return (
            <div className='NewTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input name='todo' type='text' value={this.state.todo} onChange={this.handleChange}></input>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
 
export default NewTodoForm;
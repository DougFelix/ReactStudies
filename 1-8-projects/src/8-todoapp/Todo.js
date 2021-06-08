import React, { Component } from 'react'
import '../8-todoapp/Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.info.todo,
            edit: false,
            id: this.props.info.id,
            done: this.props.info.done
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(){
        let done = !this.state.done;
        console.log('HandleCOMPLETE', done);
        this.setState({done: done});
        this.props.saveTodo({...this.state, done: done});
    }

    handleSave(){
        this.setState({edit: false});
        this.props.saveTodo(this.state);
    }

    handleChange(evt){
        this.setState(st => ({todo: evt.target.value}));
    }

    handleDelete(evt){
        this.props.deleteTodo(this.props.info.id);
    }

    handleEdit(evt){
        this.setState({edit: true});
    }

    render() { 
        return (
            <div>
            {this.state.edit
                ? <div className='Todo'>
                    <input className='Todo-edit' value={this.state.todo} onChange={this.handleChange}></input>
                    <div className='Todo-buttons'>
                        <span onClick={this.handleSave}><i className="far fa-save"></i></span>
                    </div>
                </div>
                : <div className='Todo'>
                    {console.log(this.state.done)}
                    <div className={this.state.done ? 'Todo-Completed' : ''} onClick={this.handleComplete}>
                        {this.props.info.todo}
                    </div>
                    <div className='Todo-buttons'>
                        <span onClick={this.handleEdit}><i className="far fa-edit"></i></span>
                        <span onClick={this.handleDelete}><i className="far fa-trash-alt"></i></span>
                    </div>
                </div>
            }
            </div>
        );
    }
}
 
export default Todo;
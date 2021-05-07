import React, { Component } from 'react'
import NewTodoForm from '../8-todoapp/NewTodoForm';
import Todo from '../8-todoapp/Todo';
import { v4 as uuidv4 } from 'uuid';
import '../8-todoapp/TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.mount()
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    mount(){
        let todoList = JSON.parse(localStorage.getItem('@mytodoslist') || '[]');
        return todoList;
    }

    handleSave(edited) {
        let updated = this.state.todos.map(function(todo) {
            if (todo.id === edited.id) {
                console.log('TODOLIST',edited.done);
                return edited;
            }
            return todo;
          });
        this.setState({
            todos: updated
        });
        localStorage.setItem('@mytodoslist', JSON.stringify(updated));
    }

    handleDelete(id){
        let deleted = this.state.todos.filter(
            b => b.id !== id
        );

        this.setState({todos: deleted});
        
        localStorage.setItem('@mytodoslist', JSON.stringify(deleted));
    }

    handleAdd(todoNew) {
        let todoNewId = {...todoNew, edit: false, done: false, id: uuidv4()}
        let updated = [...this.state.todos, todoNewId];
        this.setState({todos: updated});
        
        localStorage.setItem('@mytodoslist', JSON.stringify(updated));
    }

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List!<span>A simple React Todo List App.</span></h1>
                <ul>
                    {this.state.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            info={todo}
                            deleteTodo={this.handleDelete}
                            saveTodo={this.handleSave}
                        />)
                    }
                </ul>
                <NewTodoForm handleAdd={this.handleAdd}/>
            </div>
        );
    }
}
 
export default TodoList;
import React, { Component } from 'react'
import NewBoxForm from '../7-colorboxmaker/NewBoxForm';
import Box from '../7-colorboxmaker/Box';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    deleteBox(boxId) {
        this.setState(
            (st) => ({
                boxes: st.boxes.filter(
                    b => b.id !== boxId
                )
            })
        );
    }

    handleAdd(box) {
        let newBox = {...box, id: uuidv4()};
        this.setState(st => ({boxes: [...st.boxes, newBox]}));
    }
    render() { 
        
        return (
            <div>
                <NewBoxForm HandleAdd={this.handleAdd} />
                {this.state.boxes.map(b => <Box deleteBox={this.deleteBox} key={b.id} info={b} />)}
            </div>
        );
    }
}
 
export default BoxList;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dog extends Component {
    
    render() {
        const {dog} = this.props;
        return (
            <div className='row justify-content-center mt-5 mb-5'>
                <div className='col-8 col-md-6 col-lg-4'>
                    <div className='card'
                        style={{boxShadow: `0 15px 38px rgba(0, 0, 0, 0.3), 0 10px 12px rgba(0, 0, 0, 0.3)`}}
                    >
                        <img className='card-img-top' width={'300px'} src={dog.src} alt={dog.name} />
                        <div className='card-body'>
                            <h2 className='card-title'>{dog.name}</h2>
                            <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
                        </div>
                        <ul className='list-group list-group-flush'>
                            {dog.facts.map((fact, i) => <li key={i} className='list-group-item'>{fact}</li>)}
                        </ul>
                        <div className='card-body'>
                            <Link to='/dogs' className='btn btn-info'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dog;
import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {dogs} = this.props;
        const shields = dogs.map(dog => 
            <div className='col-8 col-md-6 col-lg-4'>
                <Link to={`/dogs/${dog.name}`} className="Home-card card">
                        <div className="Home-myoverlay"></div>
                        <div className="Home-profile-title">{dog.name}</div>
                        <div className="Home-myback-img myback-img">
                            <img src={dog.src} alt={dog.name}/>
                        </div>
                </Link>
            </div>    
        )
        
        return (
            <div className='mb-5'>
                <div className='row justify-content-center mt-5'>
                    {shields}
                </div>
            </div>
        );
    }
}
 
export default Home;
import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Routes from './Routes';

import hazel from './img/hazel.jpg';
import tubby from './img/tubby.jpg';
import whiskey from './img/whiskey.jpg';

import '../13-routerdogfinder/DogFinder.css';

class DogFinder extends Component {

    static defaultProps = {
        dogs: [
          { 
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
              "Whiskey loves eating popcorn.",
              "Whiskey is a terrible guard dog.",
              "Whiskey wants to cuddle with you!"
            ]
          },
          {
            name: "Hazel",
            age: 3,
            src: hazel,
            facts: [
              "Hazel has soooo much energy!",
              "Hazel is highly intelligent.",
              "Hazel loves people more than dogs."
            ]
          },
          {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
              "Tubby is not the brightest dog",
              "Tubby does not like walks or exercise.",
              "Tubby loves eating food."
            ]
          },
        ]
      }

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const {dogs} = this.props;

        return (
            <div>
                <NavBar dogs={dogs} />
                <div className='container'>
                  <Routes dogs={dogs} />
                </div>
            </div>
        );
    }
}
 
export default DogFinder;
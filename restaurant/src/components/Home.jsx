import React, { Component } from 'react';
import Menu from './Menu';

class Home extends Component {
    render() {
        document.title = "Restaurant"
        return (
            <div>
               <Menu />
            </div>
        );
    }
}

export default Home;
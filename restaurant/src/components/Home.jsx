import React, { Component } from 'react';
import Menu from './Menu';

class Home extends Component {
  
    componentDidMount() {
        document.title = "Home Page";
    }

    render() {
        return (
            <div>
               <Menu />
            </div>
        );
    }
}

export default Home;
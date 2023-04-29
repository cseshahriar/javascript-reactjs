import React, {Component} from 'react';

// class component
class PersonClass extends Component {
    render() {
        const {name, age } = this.props;
        return (
            <div className='person'>
                <h1>{name}</h1>
                <p>Age: {age}</p>
            </div>
        );
    }
}

export default PersonClass;
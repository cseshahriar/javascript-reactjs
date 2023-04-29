import React from 'react';

// function component
const Person = ({name, age}) => {
    return (
        <div className='person'>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );
};

export default Person;
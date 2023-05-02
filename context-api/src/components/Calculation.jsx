import React from 'react';

const Calculation = ({value, tasks}) => {
    const multiplication = value * 10;
    return (
        <div>
            Value * 10 in Calculation component - {multiplication} <br/>
            <ul>
                { tasks.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Calculation;
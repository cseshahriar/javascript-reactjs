import React from 'react';
import Calculation from "./Calculation";
const Value = (props) => {
    const {value, tasks } = props;
    return (
        <div>
            <h2>Value Component: {value}</h2>
            <Calculation value={value} tasks={tasks} />
        </div>
    );
};

export default Value;
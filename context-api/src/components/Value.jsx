import React, {useContext} from 'react';
import Context from "../context/Context";

const Value = () => {
    const data = useContext(Context);

    const updateStateValue = () => {
        data.setData({...data.state, value:  data.state.value + 1});
    }
    const updateStateValueDecrement = () => {
        if(data.state.value != 1) {
            data.setData({...data.state, value:  data.state.value - 1});
        }
    }

    return (
        <div>
            <h2>Value Component: {data.state.value}</h2>
            <button onClick={updateStateValue}>Increment</button>
            <button onClick={updateStateValueDecrement}>Decrement</button>
        </div>
    );
};

export default Value;
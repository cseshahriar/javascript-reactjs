import React, {useContext} from 'react';
import Context from "../context/Context";

const Value = () => {
    const data = useContext(Context);
    return (
        <div>
            <h2>Value Component: {data.value}</h2>
        </div>
    );
};

export default Value;
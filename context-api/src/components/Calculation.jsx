import React, {useContext} from 'react';
import Context from "../context/Context";
const Calculation = () => {
    const data = useContext(Context);
    const {value, tasks } = data.state;

    return (
        <div>
            Calculation component value - {value} <br/>
            <ul>
                { tasks && tasks.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Calculation;
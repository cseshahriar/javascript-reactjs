import React, {useContext} from 'react';
import Context from "../context/Context";
const Calculation = ({value, tasks}) => {
    const data = useContext(Context);
    return (
        <div>
            Calculation component value - {data.value} <br/>
            <ul>
                { data.tasks.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Calculation;
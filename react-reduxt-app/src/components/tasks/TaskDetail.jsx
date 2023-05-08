import React from 'react';
import {Link} from "react-router-dom";

const TaskDetail = (props) => {
    const {task, index } = props;

    return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.title }</td>
                <td>{ task.description }</td>
                <td>{ task.priority }</td>
                <td>
                    <Link to={`/detail/${task.id}`} className='btn btn-info btn-sm' title='Edit Task'><i className='fa fa-pencil' /> </Link>
                    <Link to='/' className='btn btn-danger btn-sm ms-2' title='Delete Task'><i className='fa fa-trash'/> </Link>
                </td>
            </tr>
    );
};

export default TaskDetail;
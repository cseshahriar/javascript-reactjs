import React from 'react';

const TaskDetail = (props) => {
    const {task, index } = props;

    return (
        <>
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.title }</td>
                <td>{ task.description }</td>
                <td>{ task.priority }</td>
                <td>
                    <a href='#' className='btn btn-info btn-sm' title='Edit Task'><i className='fa fa-pencil' /> </a>
                    <a href='#' className='btn btn-danger btn-sm ms-2' title='Delete Task'><i className='fa fa-trash'/> </a>
                </td>
            </tr>
        </>
    );
};

export default TaskDetail;
import React from 'react';
import {Button, Table} from "react-bootstrap";
import TaskDetail from "./TaskDetail";

const TaskList = (props) => {
    const tasks = props.data;
    const setIsCreateMode = props.setIsCreateMode;

    return (
        <>
            <div className='mt-5'>
                <div className='float-start'>
                    <h3>Task List</h3>
                </div>
                <div className='float-end'>
                    <Button className='btn btn-sm btn-primary'
                            title='Create Task'
                            onClick={() => setIsCreateMode(true)}><i className='fa fa-plus'/>
                    </Button>
                </div>
                <div className='clearfix'></div>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    tasks && tasks.map((task, index) => (
                        <TaskDetail key={index} task={task} index={index} />
                    ))
                }
                </tbody>
            </Table>
        </>
    );
};

export default TaskList;
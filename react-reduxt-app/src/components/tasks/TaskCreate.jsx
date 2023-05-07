import React from 'react';
import {Button, Form} from "react-bootstrap";

const TaskCreate = (props) => {
    const {
        createTask,
        title,
        setTitle,
        description,
        setDescription,
        priority,
        setPriority
    } = props;

    return (
        <Form onSubmit={(e) => createTask(e)}>
            <h3>New Task</h3>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='title'>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='description'>Description</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Description" name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="priority">Priority</Form.Label>
                <select name='priority' className='form-control'
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}>
                    <option value={''}>Select Task Priority</option>
                    <option value={'low'}>Low</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'high'}>High</option>
                </select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Task
            </Button>
        </Form>
    );
};

export default TaskCreate;
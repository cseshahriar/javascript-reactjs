import React from 'react';
import {Button, Form} from "react-bootstrap";

const TaskCreate = (props) => {
    const {
        isAdded,
        createTask,
        title,
        setTitle,
    } = props;

    return (
        <Form onSubmit={(e) => createTask(e)}>
            <h3>New Task</h3>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='title'>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Task
            </Button>
        </Form>
    );
};

export default TaskCreate;
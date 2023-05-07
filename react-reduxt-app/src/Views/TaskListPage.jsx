import React from 'react';
import {useEffect, useState} from "react";


// import component
import Layout from "../components/layouts/Layout";
import TaskCreate from "../components/tasks/TaskCreate";
import TaskList from "../components/tasks/TaskList";

// import third party
import {Container} from "react-bootstrap";

const TaskListPage = () => {
    // state
    const [tasks, setTasks] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    // methods
    const createTask = (e) => {
        e.preventDefault();

        // validations
        if (title.length === 0) {
            alert("Please give a title !");
            return false;
        }
        if (description.length === 0) {
            alert("Please give a description !");
            return false;
        }
        if (priority.length === 0) {
            alert("Please give a description !");
            return false;
        }

        const taskItem = {
            id: 100,
            title,
            description,
            priority
        }
        const tasksData = tasks;
        tasksData.unshift(taskItem);
        setTasks(tasksData);
        setIsAdded(true);
        // form reset
        setTitle('');
        setDescription('');
        setPriority('');
    }

    // component did mount
    useEffect(() => {
        const data = []
        setTasks(data);
    }, []); // dependency

    // component return
    return (
        <div className="App">
            {/* navbar */}
            <Layout>

                    {/* task create form */}
                    {
                        isCreateMode === true ? (
                            <TaskCreate
                                isAdded={isAdded}
                                createTask={createTask}
                                title={title}
                                setTitle={(val) => setTitle(val)}
                                description={description}
                                setDescription={(val) => setDescription(val)}
                                priority={priority}
                                setPriority={(val) => setPriority(val)}
                            />
                        ) : null
                    }

                    {/* component include */}
                    <TaskList data={tasks} setIsCreateMode={setIsCreateMode} />
            </Layout>
        </div>
    );
}

export default TaskListPage;

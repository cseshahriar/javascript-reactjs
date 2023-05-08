import React from 'react';
import {useEffect, useState} from "react";

// import component
import Layout from "../components/layouts/Layout";
import TaskCreate from "../components/tasks/TaskCreate";
import TaskList from "../components/tasks/TaskList";

// import third party
import {Container} from "react-bootstrap";
import axios from "axios";
import {getTodosData} from "../services/TaskService";

const TaskListPage = () => {
    // state
    const [tasks, setTasks] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);

    const [title, setTitle] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    // methods
    const initializeData = async () => {
        const data = await getTodosData();
        console.log(data);
        setTasks(data)
    }

    const createTask = (e) => {
        e.preventDefault();

        // validations
        if (title.length === 0) {
            alert("Please give a title !");
            return false;
        }
        const taskItem = {
            id: 100,
            title,
        }
        const tasksData = tasks;
        tasksData.unshift(taskItem);
        setTasks(tasksData);
        setIsAdded(true);
        // form reset
        setTitle('');
    }

    // component did mount
    useEffect(() => {
        initializeData();
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

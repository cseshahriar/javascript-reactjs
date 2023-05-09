import React from 'react';
import {useEffect, useState} from "react";

// import component
import Layout from "../components/layouts/Layout";
import TaskCreate from "../components/tasks/TaskCreate";
import TaskList from "../components/tasks/TaskList";

// import third party
import axios from "axios";
import {getTodoData, storeTodoData} from "../services/TaskService";

const TaskListPage = () => {
    // state
    const [tasks, setTasks] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    // methods
    const initializeData = async () => {
        const data = await getTodoData();
        data.sort();
        data.reverse();
        setTasks(data)
    }

    // create task
    const createTask = async (e) => {
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
            alert("Please give a priority !");
            return false;
        }

        const taskItem = {
            title,
            description,
            priority
        }
        // call post api
        const isAdded =  await storeTodoData(taskItem);
        if(isAdded) {
            // form reset
            setTitle('');
            setDescription('');
            setPriority('');
            initializeData();
        } else {
            alert('Something went wrong !!');
        }
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
                                description={description}
                                setDescription={(val) => setDescription(val)}
                                priority={priority}
                                setPriority={setPriority}
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

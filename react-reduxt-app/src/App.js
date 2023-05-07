import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import Layout from "./components/layouts/Layout";
import TaskList from "./components/tasks/TaskList";
import TaskCreate from "./components/tasks/TaskCreate";

function App() {
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
            {/* content body */}
            <Container className='py-5'>
                {/* task create form */}
                {
                    isCreateMode === true ? (
                        <TaskCreate
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
            </Container>
        </Layout>
    </div>
  );
}

export default App;

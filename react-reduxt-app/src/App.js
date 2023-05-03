import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

function App() {
  // state
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  // component did mount
  useEffect(() => {
      // api call and set tasks data
      const data = [
          {id: 1, title: 'First Title', description: 'First Description', priority: 'low'},
          {id: 2, title: 'Second Title', description: 'Second Description', priority: 'low'},
      ]
      setTasks(data);
  }, []); // dependency

   // methods
  const updateCreateMode = () => {
      setIsCreateMode(true);
  }

  // component return
  return (
    <div className="App">
        {/* navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Task App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Task List</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* content body */}
        <Container className='py-5'>
            {/* task create form */}
            {
                isCreateMode === true ? (
                    <Form>
                        <h3>New Task</h3>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" name='title' id='title' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea' rows={3} placeholder="Description" name='description' id='description' />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="priority">Priority</Form.Label>
                            <Form.Select id="priority" name='priority'>
                                <option value={''}>Select Task Priority</option>
                                <option value={'low'}>Low</option>
                                <option value={'medium'}>Medium</option>
                                <option value={'high'}>High</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Task
                        </Button>
                    </Form>
                ) : ''
            }

            <div>
                {/* left title and right create button */}
                <div className='float-start'>
                    <h3>Task List</h3>
                </div>
                <div className='float-end'>
                    <Button className='btn btn-sm btn-primary' title='Create Task' onClick={updateCreateMode}><i className='fa fa-plus'/> </Button>
                </div>
                <div className='clearfix'></div>
            </div>

            {/* data list */}
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
                        <tr key={task.id}>
                            <td>{ index + 1 }</td>
                            <td>{ task.title }</td>
                            <td>{ task.description }</td>
                            <td>{ task.priority }</td>
                            <td>
                                <a href='#' className='btn btn-info btn-sm' title='Edit Task'><i className='fa fa-pencil' /> </a>
                                <a href='#' className='btn btn-danger btn-sm ms-2' title='Delete Task'><i className='fa fa-trash'/> </a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    </div>
  );
}

export default App;

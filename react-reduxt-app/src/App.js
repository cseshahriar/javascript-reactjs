import React from "react";
import { Routes, Route } from "react-router-dom"
import {Container} from "react-bootstrap";


// import Page Component
import TaskListPage from "./Views/TaskListPage";

function App() {
  // component return
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <TaskListPage/> } />
        </Routes>
    </div>
  );
}

export default App;

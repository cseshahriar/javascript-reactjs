import React from "react";
import { Routes, Route } from "react-router-dom";

// import Page Component
import TaskListPage from "./Views/TaskListPage";
import TaskDetailPage from "./Views/TaskDetailPage";
import AboutPage from "./Views/AboutPage";

function App() {
  // component return
  return (
        <Routes>
            <Route path="/" element={ <TaskListPage /> } />
            <Route path="/detail/:task_id" element={ <TaskDetailPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
        </Routes>
  );
}

export default App;

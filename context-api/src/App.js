import './App.css';
import {useState} from "react";
import Value from "./components/Value";

function App() {
  const [data, setData] = useState({
    value: 10,
    tasks: [
        "Calculation task 1",
        "Calculation task 2",
        "Calculation task 3",
    ]
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Context API</h2>
          <Value value={data.value} tasks={data.tasks} />
      </header>
    </div>
  );
}

export default App;

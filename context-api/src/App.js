import './App.css';
import {useState} from "react";
import Context from "./context/Context";

import Value from "./components/Value";
import Calculation from "./components/Calculation";

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
      <Context.Provider value={data}>
          <div className="App">
              <header className="App-header">
                  <h2>Context API</h2>
                  <Value />
                  <Calculation />
              </header>
          </div>
      </Context.Provider>
  );
}

export default App;

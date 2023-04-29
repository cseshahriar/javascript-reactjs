import './App.css';

import Person from "./components/Person";
import PersonClass from "./components/PersonClass";
function App() {
    // data
    const persons = [
        {
            id: 1,
            name: 'Shahriar',
            age: 28,
        },
        {
            id:2,
            name: 'Shorna',
            age: 23,
        }
    ]

  return (
    <div className="App">
      <header className="App-header">
          {
              persons.map((person) => {
                  return <Person {...person} />
              })
          }

          {
              persons.map((person) => {
                  return <PersonClass {...person} />
              })
          }

      </header>
    </div>
  );
}

export default App;

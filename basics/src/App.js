import './App.css';

import Person from "./components/Person";

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
      </header>
    </div>
  );
}

export default App;

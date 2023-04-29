import './App.css';

import Person from "./components/Person";
import PersonClass from "./components/PersonClass";
import DynamicComponent from "./components/DynamicComponent";

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

          <DynamicComponent>
              <div className='box'>
                  <h1>Children</h1>
                  <div className='person'>
                      <h1>Name: Shahriar hosen</h1>
                      <p>Age: 28</p>
                  </div>
              </div>
          </DynamicComponent>

      </header>
    </div>
  );
}

export default App;

import './App.css';

import Person from "./components/Person";
import PersonClass from "./components/PersonClass";
import DynamicComponent from "./components/DynamicComponent";
import Book from "./components/Book";
import StateComponent from "./components/StateComponent";

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

    // state or component information
    // state is class component property

  return (
    <div className="App">
      <header className="App-header">
          <h3>Component with map</h3>
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

          <h3>Dynamic component</h3>
          {/* dynamic component, can pass a child compoennt */}
          <DynamicComponent>
              {
                  persons.map((person) => {
                      return <PersonClass {...person} />
                  })
              }
          </DynamicComponent>

          {/* books component information */}
          <Book bookName='1984' writer='George Orwell' />
          <Book bookName='The Da vinci Code' writer='George Orwell' />

          <h3>State component</h3>
          <StateComponent/>
      </header>
    </div>
  );
}

export default App;

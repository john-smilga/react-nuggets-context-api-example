import React, { useState } from 'react';
import list from './list';
const AppContext = React.createContext();

// AppContext.Provider
// AppContext.Consumer

function App() {
  const [people, setPeople] = useState(list);
  // remove person from the list
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <AppContext.Provider value={{ people, removePerson }}>
      <main>
        <List />
      </main>
    </AppContext.Provider>
  );
}
function List() {
  const { people } = React.useContext(AppContext);
  return (
    <section>
      {people.map((person) => {
        const { id, name } = person;
        return <Person key={id} name={name} id={id} />;
      })}
    </section>
  );
}
function Person({ id, name }) {
  const { removePerson } = React.useContext(AppContext);

  return (
    <article>
      <h3>{name}</h3>
      <button onClick={() => removePerson(id)}>remove</button>
    </article>
  );
}

export default App;

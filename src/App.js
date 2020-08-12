import React, { useState } from 'react';
import list from './list';

function App() {
  const [people, setPeople] = useState(list);
  // remove person from the list
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <main>
      <List people={people} />
    </main>
  );
}
function List({ people }) {
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
  return (
    <article>
      <h3>{name}</h3>
      <button>remove</button>
    </article>
  );
}

export default App;

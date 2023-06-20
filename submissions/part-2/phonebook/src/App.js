import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Carson Haskell" }]);
  const [newName, setNewName] = useState("");

  const addPerson = event => {
    event.preventDefault();

    const duplicate = checkDuplicate(newName);
    if (duplicate) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const newPerson = {
      name: newName,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
  };

  const checkDuplicate = name => persons.find(person => person.name === name);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:{" "}
          <input
            value={newName}
            onChange={event => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
      <br />
      <div>Debug: {newName} </div>
      <div>Debug: {JSON.stringify(persons)}</div>
    </div>
  );
};

export default App;

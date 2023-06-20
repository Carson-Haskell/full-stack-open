import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = event => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      alert("Name and Number must be provided");
      return;
    }

    const duplicate = checkDuplicate(newName);
    if (duplicate) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const checkDuplicate = name => persons.find(person => person.name === name);

  const filterByName = () => {
    const filtered = persons.filter(person => {
      const name = person.name.toLowerCase();
      return name.includes(filter);
    });

    return filtered;
  };

  const filteredPeople = filterByName();

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search by name:
        <input
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:{" "}
          <input
            value={newName}
            onChange={event => setNewName(event.target.value)}
          />
        </div>
        <div>
          Number:{" "}
          <input
            value={newNumber}
            onChange={event => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPeople.map(({ name, number }) => (
        <p key={name}>
          {name} {number}
        </p>
      ))}
      <br />
    </div>
  );
};

export default App;

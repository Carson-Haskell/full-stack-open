import { useState } from "react";

import Filter from "./Filter";
import NewPerson from "./NewPerson";
import People from "./People";

const Phonebook = () => {
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
      return name.includes(filter.toLowerCase());
    });

    return filtered;
  };

  const filteredPeople = filterByName();

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new person</h2>
      <NewPerson
        handleSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <People people={filteredPeople} />
      <br />
    </div>
  );
};

export default Phonebook;

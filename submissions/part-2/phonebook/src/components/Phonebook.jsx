import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Filter";
import NewPerson from "./NewPerson";
import People from "./People";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => setPersons(res.data));
  }, []);

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

    axios
      .post("http://localhost:3001/persons", newPerson)
      .then(res => {
        setPersons([...persons, res.data]);
        setNewName("");
        setNewNumber("");
      })
      .catch(error => console.log(error));

    // setPersons([...persons, newPerson]);
    // setNewName("");
    // setNewNumber("");
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

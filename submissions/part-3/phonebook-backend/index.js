const express = require("express");
const app = express();

const people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  res.send(
    "<p>A simple api for getting users from a phonebook. Navigate to '/api/people' to get the data'</p>"
  );
});

app.get("/api/people", (req, res) => {
  res.json(people);
});

app.get("/info", (req, res) => {
  const reqTime = new Date();

  res.send(
    `<p>Phonebook has info for ${people.length} ${
      people.length == 1 ? "person" : "people"
    }</p>
    <p>${reqTime}</p>`
  );
});

app.get("/api/people/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(person => person.id === id);

  person ? res.json(person) : res.status(404).end();
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

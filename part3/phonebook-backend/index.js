const express = require("express");
const app = express();

const morgan = require('morgan');

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.use(express.json());
morgan.token('content', function (req, res) {
  return JSON.stringify(req.body);
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content', {
  skip: function (req, res) { return req.method !== 'POST'}
}))

app.get("/api/persons", (req, res) => {
  res.json(persons);
})

const generateId = () => {
  return Math.floor(Math.random() * 9999999999)
}
app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: 'Name Missing'
    })
  }
  if (body.number === undefined) {
    return res.status(400).json({
      error: 'Number Missing'
    })
  }
  if (persons.findIndex(person => person.name === body.name) !== -1) {
    return res.status(400).json({
      error: "Name must be unique"
    })
  }
  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person);

  res.json(person);
})

app.get("/info", (req, res) => {
  const len = persons.length;
  const date = Date()
  res.send(`<p>Phonebook has info for ${len} people.</p><p>${date}</p>`)
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const selectedPerson = persons.find(person => person.id === id);

  if (selectedPerson) {
    res.send(selectedPerson);
  } else {
    res.status(404).send({error: "Person not found"}).end()
  }
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);

  res.status(204).end();
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})
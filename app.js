const express = require('express')
const app = express()

let users = [
  {
    id: 1,
    name: "Ada Lovelace",
    favoriteSubject: "Science"
  },
  {
    id: 2,
    name: "Leonhard Euler",
    favoriteSubject: "Math"
  },
  {
    id: 3,
    name: "Isaac Newton",
    favoriteSubject: "Science"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World </h1>')
})

app.get('/users', (request, response) => {
  response.json(users)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)
  const user = users.find(user => user.id === id)

  response.json(user)
})

app.delete('/users/:id', (request, response) => {
  const id = Number(request.params.id)
  users = users.filter(user => user.id !== id)

  response.status(204).end()
})

app.post('/users', (request, response) => {
  const user = request.body
  user.id = 4

  users = users.concat(user)
  response.json(user)
})

module.exports = app

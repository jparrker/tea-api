const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 3000

const tea = {
  'oolong': {
      'type': 'black',
      'origin': 'asia',
      'waterTemp': 200,
      'caffinated': true,
      'steepTimeSeconds': 180,
      'flavor': 'delicious'
      
  },

  'matcha': {
      'type': 'green',
      'origin': 'Asia',
      'waterTemp': 200,
      'caffinated': false,
      'steepTimeSeconds': 180 ,
      'flavor': 'delicious'
      
  },

  'unknown': {
      'type': 'unknown',
      'origin': 'unknown',
      'waterTemp': 0,
      'caffinated': false,
      'steepTimeSeconds': 0,
      'flavor': 'unkown'
      
  }
}


app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
  response.json(tea)
})

app.get("/api/:name", (request, response) => {
  const teaName = request.params.name.toLowerCase()
  if(tea[teaName]) {
    response.json(tea[teaName])
  } else {
    response.json(tea['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})


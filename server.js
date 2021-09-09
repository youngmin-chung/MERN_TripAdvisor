/* Title: server.js
 * Name: Youngmin Chung
 * Student #: 0816299
 * Description: It's for server.js
 */

const { port, graphql, server } = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const myroutes = require('./project1routes')
const app = express()
//const cors = require("cors");
const graphqlHTTP = require('express-graphql')
const { resolvers } = require('./resolvers')
const { schema } = require('./schema')

app.set(port || 3000)
app.set(server || 'localhost')
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  next()
})

app.use('/setupalerts', myroutes)
app.use(express.static('public'))
//app.use(cors());
app.use(
  graphql,
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)
// app.listen(port || 5001)

app.listen(app.get(port), function () {
  console.log(
    '%s server listening at http://%s:%s',
    process.env.NODE_ENV,
    app.get(server),
    app.get(port)
  )
})
//console.log(  `Server ready at localhost:${port}${graphql} - ${process.env.NODE_ENV}`)

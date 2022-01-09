const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/index')
const connectDB = require('./db/database')

const app = express()

app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}))

connectDB()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
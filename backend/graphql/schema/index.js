const { buildSchema } = require('graphql')

const schema = buildSchema(`
 type TodoItem{
     _id: ID!
     text: String!
     isCompleted: Boolean!
     createdAt: String!
 }

 input TodoItemInput{
     text: String!
     isCompleted: Boolean!
 }

 type Query{
     todos: [TodoItem!]
 }

 type Mutation{
     addTodoItem(todoDetails:TodoItemInput): TodoItem
 }

 schema{
     query: Query
     mutation: Mutation
 }
`)


module.exports = schema
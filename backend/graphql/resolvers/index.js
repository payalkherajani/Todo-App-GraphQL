// resolver name should match to every query and mutation
const Todos = require('../../models/todo')

const todos = async () => {
    try {
        const todos = await Todos.find({})
        return todos
    } catch (err) {
        throw err
    }
}

const addTodoItem = async (args) => {
    try {
        const { text, isCompleted } = args.todoDetails
        const newTodo = new Todos({
            text,
            isCompleted
        })
        await newTodo.save()
        return newTodo
    } catch (err) {
        throw err
    }
}

module.exports = { todos, addTodoItem }


//Example
// mutation {
//     addTodoItem(todoDetails: {text: "HomeWork", isCompleted: false}) {
//       _id
//       text
//       isCompleted
//     }
//   }

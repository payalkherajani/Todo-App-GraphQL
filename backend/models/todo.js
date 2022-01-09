const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Todos = mongoose.model("Todos", todoSchema)

module.exports = Todos
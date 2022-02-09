const todos = require('../data/todos.json')

getAllTodo = () => {
    return todos
}

getTodoById = (todoID) => {
    return todos.filter(todo => todo.id == todoID)
}

getTodoByUserID = (userID) => {
    return todos.filter(todo => todo.userId == userID)
}

module.exports = {
    getAllTodo,
    getTodoById,
    getTodoByUserID,
}
const users = require('../data/users.json');

getAllUser = () => {
    return users
}

getUserById = (userId) => {
    return users.filter(user => user.id == userId)
}

module.exports = {
    getAllUser,
    getUserById,
}
const posts = require('../data/posts.json');

getAllPost = () => {
    return posts
}

getPostById = (postID) => {
    return posts.filter(post => post.id == postID)
}

getPostByUserID = (userID) => {
    return posts.filter(post => post.userId == userID)
}

module.exports = {
    getAllPost,
    getPostById,
    getPostByUserID,
}
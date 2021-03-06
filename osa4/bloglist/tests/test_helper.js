const Blog = require('../models/blog')
const User = require('../models/user')

const nonExistingId = async () => {
  const blog = new Blog({ author: 'Arde', title:'Arden blogi', url: 'arde.com' })
  await blog.save()
  await blog.remove()
  return blog._id.toString()
}

const getBlogsInDatabase = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const getUsersInDatabase = async () => {
  const users = await User
    .find({})
    .populate('user', { username: 1, name: 1 })

  return users.map(user => user.toJSON())
}

module.exports = {
  nonExistingId,
  getBlogsInDatabase,
  getUsersInDatabase
}
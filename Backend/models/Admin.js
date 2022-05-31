const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AdminSchema = new Schema({
  user_name: {
    type: String
  },
  contact_number: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Admin = mongoose.model('admins', AdminSchema)
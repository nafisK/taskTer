const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  // companyId: {
  //   type: String,
  //   required: true,
  // },
  companyName: {
    type: String,
    required: true,
  },
  freelancerId: {
    type: String,
  },
  dueDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Task', TaskSchema)

const mongoose = require('mongoose')

const FreelancerSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gradient: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  pfp: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model('Freelancer', FreelancerSchema)

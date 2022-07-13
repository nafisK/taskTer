const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
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
  banner: {
    data: Buffer,
    contentType: String,
  },
  logo: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model('Company', CompanySchema)

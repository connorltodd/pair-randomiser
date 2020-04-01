const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    students: {
      type: Array,
      required: true
    },
    campus: {
      type: String,
      required: true
    }
  })
  
  module.exports = mongoose.model('Course', courseSchema)
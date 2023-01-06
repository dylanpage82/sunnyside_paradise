const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
  title: String,
  destination: String,
  category: String,
  url: String,
  image: String,
  text: String
}, {
  timestamps: true
})

const Location = model('Location', locationSchema)

module.exports = Location

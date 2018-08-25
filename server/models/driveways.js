const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
    required: 'true'
  }
})

const drivewaysSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true
  },
  rateDay: {
    type: String,
  },
  rateHour: {
    type: String,
  },
  image: {
    type: String,
  },
  geometry: LocationSchema,
})

const Driveways = mongoose.model('driveways', drivewaysSchema)

module.exports = Driveways
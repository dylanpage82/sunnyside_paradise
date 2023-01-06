const Location = require('../../models/location')

const dataController = {

  index (req, res, next) {
    Location.find({}, (err, allLocations) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.locations = allLocations
        next()
      }
    })
  },

  destroy (req, res, next) {
    Location.findByIdAndDelete(req.params.id, (err, deletedLocation) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.location = deletedLocation
        next()
      }
    })
  },

  update (req, res, next) {
    Location.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLocation) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.location = updatedLocation
        next()
      }
    })
  },

  create (req, res, next) {
    Location.create(req.body, (err, createdLocation) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.location = createdLocation
        next()
      }
    })
  },

  show (req, res, next) {
    Location.findById(req.params.id, (err, foundLocation) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.location = foundLocation
        next()
      }
    })
  }
}

const apiController = {
  index (req, res) {
    res.json(res.locals.data.locations)
  },
  show (req, res) {
    res.json(res.locals.data.location)
  }
}

module.exports = { dataController, apiController }

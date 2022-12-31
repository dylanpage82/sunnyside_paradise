require('dotenv').config();
require('./database');

const { text } = require('express');
const Location = require('../models/location')

const starterLocations = [
    {
        title:'Test',
        destination:'Test',
        category:'Test',
        url:'Test',
        imgage:'Test',
        text:'Test'
        
    }
]
Location.deleteMany({})
    .then(() => {
        Location.create(starterLocations)
            .then((createdLocations) => {
                console.log('created Locations', createdLocations)
            })
            .catch(err => {
                console.log(error)
            })
    })
    .catch(err => {
        console.log(err)
    })
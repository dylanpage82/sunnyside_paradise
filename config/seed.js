require('dotenv').config();
require('./database');

const { text } = require('express');
const Location = require('../models/location')

const starterLocations = [
    {
        title:'HALCYON BEACH',
        destination:'Castries, Saint Lucia',
        category:'Inclusive',
        url:'https://www.sandals.com/halcyon-beach/',
        imgage:'https://resolve.sandals.com/sri?set=key[resolve.pixelRatio],value[2]&set=key[resolve.width],value[2500]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=fileName[https%3A%2F%2Fcdn.sandals.com%2Fsandals%2Fv13%2Fimages%2FEN%2Fuploads%2Fslu_overview_002_777ea1504f.jpg]&source=continueonerror[true],name[image],url[global.fileName]&set=prdImageFound[global.source.success]&source=if[(!%20global.source.success)],name[base1],url[https%3A%2F%2Fcdn.sandals.com%2Fsandals%2Fv13%2Fimages%2FEN%2Fresorts%2Fglobal%2Fcoming-soon%2Fbackground.jpg]&scale=options[limit],size[2500x10000]&sink=format[webp],if[(global.prdImageFound)]&sink=if[(!%20global.prdImageFound)],nocache[true]',
        text:'Set on the breathtaking 220-acre La Toc Estate, Sandals Regency La Toc truly exudes beauty from every gorgeous angle. With its lush tropical scenery and rolling fairways at the challenging executive-style golf course onsite, it truly represents the utmost in luxury accommodations including the prestigious Sunset Oceanview Bluff Village, an exclusive resort within a resort. Known as the “Emerald of the Caribbean” because of its sparkling emerald waters, Sandals Regency La Toc hugs a magnificent half-mile, crescent-shaped beach. Indulge in nine 5-Star Global Gourmet®'
        
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
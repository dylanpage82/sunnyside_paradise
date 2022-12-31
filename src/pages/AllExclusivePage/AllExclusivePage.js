import {useState, useEffect} from 'react'

export default function AllExclusivePage(props){
    const [locations, setLocations] = useState([])
    const [foundLocation, setFoundLocation] = useState(null)
    const [newLocation, setNewLocation] = useState({
        title:'',
        destination:'',
        category: '',
        url: '',
        image: '',
        text:''
    })
    const getLocations = async () => {
        try {
            const response = await fetch('/api/locations')
            const data = await response.json()
            setLocations(data)
        } catch (error) {
            console.error(error)
        }
    }
    const deleteLocation = async (id) => {
        try {
            const response = await fetch(`/api/locations/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundLocation(data)
        } catch (error) {
            console.error(error)
        }
    }
    const updateLocation = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/locations/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundLocation(data)
        } catch (error) {
            console.error(error)
        }
    }
    const createLocation = async () => {
        try {
            const response = await fetch(`/api/locations`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newLocation})
            })
            const data = await response.json()
            setFoundLocation(data)
            setNewLocation({
                title:'',
                destination:'',
                category:'',
                image:'',
                url:'',
                text:''
            })
        } catch (error) {
            console.error(error)
        }
    }

const handleChange = (evt) => {
    setNewLocation({...newLocation, [evt.target.name]: evt.target.value})
}

useEffect(()=> {
    getLocations()
}, [foundLocation])

    
    return(
        <>
            {
                locations && locations.length ? (
                    <div>
                        {
                            locations
                                // .filter((i) => i.category === true)
                                .map((location) => {
                                    return (
                                        <main key={location._id}>
                                        <h1>{location.title}</h1>
                                        <h3>{location.destination}</h3>
                                        <img src={location.image} />
                                        <p>{location.text}</p>
                                        <button onClick={location.url}>BOOK HERE</button>
                                        
                                        </main>                 
                                    )
                                })
                        }
                    </div>
                ):<h1></h1>
            }
        </>
    )
}
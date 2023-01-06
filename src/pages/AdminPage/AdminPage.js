import { useState, useEffect } from 'react'

export default function AdminPage ({ user }) {
  const [locations, setLocations] = useState([])
  const [foundLocation, setFoundLocation] = useState(null)
  const [newLocation, setNewLocation] = useState({
    title: '',
    destination: '',
    category: '',
    url: '',
    image: '',
    text: ''
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
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      const data = await response.json()
      setFoundLocation(data)
      console.log(foundLocation)
    } catch (error) {
      console.error(error)
    }
  }
  const updateLocation = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setFoundLocation(data)
    } catch (error) {
      console.error(error)
    }
  }
  const createLocation = async () => {
    try {
      const response = await fetch('/api/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newLocation })
      })
      const data = await response.json()
      setFoundLocation(data)
      setNewLocation({
        title: '',
        destination: '',
        category: '',
        image: '',
        url: '',
        text: ''
      })
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    createLocation()
  }

  const handleChange = (evt) => {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getLocations()
  }, [foundLocation])

  return (
    <>

      <form onSubmit={handleSubmit}>
        Title <input type='text' name='title' value={newLocation.title} onChange={handleChange} /> <br />
        Destination <input type='text' name='destination' value={newLocation.destination} onChange={handleChange} /> <br />
        <input type='text' name='category' value={newLocation.category} onChange={handleChange} /> <br />
        <input type='text' name='image' value={newLocation.image} onChange={handleChange} /> <br />
        <input type='text' name='url' value={newLocation.url} onChange={handleChange} /> <br />
        <input type='text' name='text' value={newLocation.text} onChange={handleChange} /> <br />
      </form>
      {
                user && user.isAdmin
                  ? (
                    <main>
                      {
                            locations
                              .map((location) => {
                                return (
                                  <article key={location._id} className='vacation'>
                                    <h1>{location.title}</h1>
                                    <h3>{location.destination}</h3>
                                    <img src={location.image} />
                                    <p>{location.text}</p>
                                    <button className='resort' onClick={() => { window.location.href = location.url }}>VIEW RESORT</button>
                                    <button onClick={() => deleteLocation(location._id)}>Delete</button>

                                  </article>
                                )
                              })
                        }
                    </main>
                    )
                  : <h1>YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE</h1>
            }
    </>
  )
}

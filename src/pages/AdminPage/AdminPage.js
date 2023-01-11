import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

  const handleChange = (evt) => {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getLocations()
  }, [foundLocation])

  return (
    <>

      {
                user && user.isAdmin
                  ? (
                    <>
                      <div className='create'>
                        {'Title '}<input value={newLocation.title} onChange={handleChange} name='title' /><br />
                        {'Destination '}<input value={newLocation.destination} onChange={handleChange} name='destination' /> <br />
                        Category 0, 1, 2<input value={newLocation.category} onChange={handleChange} name='category' /><br />
                        {'Image '}<input value={newLocation.image} onChange={handleChange} name='image' /><br />
                        Url <input value={newLocation.url} onChange={handleChange} name='url' /><br />
                        Text<input value={newLocation.text} onChange={handleChange} name='text' /> <br />
                        <button onClick={() => createLocation()}>Create New Resort</button>
                      </div>
                      <main>
                        {
                            locations
                              .map((location) => {
                                return (
                                  <article key={location._id} className='vacation'>
                                    <h1>{location.title}</h1>
                                    <Link to={`/location/${location._id}`}>Edit</Link>
                                    <h3>{location.destination}</h3>
                                    <img src={location.image} alt='' />
                                    <p>{location.text}</p>
                                    <button className='resort' onClick={() => { window.location.href = location.url }}>VIEW RESORT</button>
                                    <button onClick={() => deleteLocation(location._id)}>Delete</button>

                                  </article>
                                )
                              })
                        }
                      </main>
                    </>
                    )
                  : <h1>YOU ARE NOT AUTHORIZED TO VIEW THIS PAGE</h1>
            }
    </>
  )
}

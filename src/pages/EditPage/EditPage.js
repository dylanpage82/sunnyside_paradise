
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditPage (props) {
  const { id } = useParams()
  const [location, setLocation] = useState()
  const [tempLocation, setTempLocation] = useState()
  const [changed, setChanged] = useState(null)

  const getLocation = async () => {
    try {
      const response = await fetch('/api/locations/' + id)
      const data = await response.json()
      setLocation(data)
      setTempLocation(data)
    } catch (error) {
      console.error(error)
    }
  }
  const updateLocation = async () => {
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tempLocation)
      })
      const data = await response.json()
      setLocation(data)
      setChanged(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getLocation()
  }, [setLocation])

  return (
    <>
      {
            location
              ? (
                <main>
                  <article key={id} />
                  <input
                    type='text'
                    value={tempLocation.title}
                    onChange={(e) => {
                      setChanged(true)
                      setTempLocation({
                        ...tempLocation,
                        title: e.target.value
                      })
                    }}
                  /> <br />

                  <input
                    type='text'
                    value={tempLocation.destination}
                    onChange={(e) => {
                      setChanged(true)
                      setTempLocation({
                        ...tempLocation,
                        destination: e.target.value
                      })
                    }}
                  /> <br />

                  <input
                    className='text'
                    type='text'
                    value={tempLocation.text}
                    onChange={(e) => {
                      setChanged(true)
                      setTempLocation({
                        ...tempLocation,
                        text: e.target.value
                      })
                    }}
                  /> <br />

                  {changed
                    ? (
                      <>
                        <button
                          onClick={(e) => {
                            setTempLocation({ ...location })
                            setChanged(false)
                          }}
                        >
                          Cancel
                        </button>

                        <button onClick={updateLocation}>Save</button>
                      </>
                      )
                    : null}

                </main>

                )
              : <h1>ERROR</h1>
        }
    </>
  )
}

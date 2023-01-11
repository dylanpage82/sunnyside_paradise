
import { useEffect, useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import AllInclusivePage from '../AllInclusivePage/AllInclusivePage'
import CruisesPage from '../CruisesPage/CruisesPage'
import AllExclusivePage from '../AllExclusivePage/AllExclusivePage'
import NavBar from '../../components/ NavBar/NavBar'
import ImageSlider from '../../components/ImgSlider/ImageSlider'
import images from '../../components/ImgSlider/images'
import { Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import AdminPage from '../AdminPage/AdminPage'
import EditPage from '../EditPage/EditPage'
import { getUser } from '../../utilities/users-service'

export default function App () {
  const [user, setUser] = useState(getUser)
  const [locations, setLocations] = useState(null)

  const getLocations = async () => {
    try {
      const response = await fetch('/api/locations')
      const data = await response.json()
      setLocations(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>SunnySide Paradise</h1>
      </div>
      {
        user
          ? <>
            <NavBar setUser={setUser} />
            <Routes>
              <Route path='/cruises' element={<CruisesPage locations={locations} />} />
              <Route path='/exclusive' element={<AllExclusivePage locations={locations} />} />
              <Route path='/inclusive' element={<AllInclusivePage locations={locations} />} />
              <Route path='/admin' element={<AdminPage user={user} />} />
              <Route path='/location/:id' element={<EditPage />} />
            </Routes>
            <ImageSlider images={images} />
            <Footer />
          </>

          : <>
            <AuthPage setUser={setUser} />
            <ImageSlider images={images} />
            <Footer />
          </>

      }

    </div>
  )
}

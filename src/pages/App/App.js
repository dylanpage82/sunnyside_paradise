
import { useState, useEffect } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import AllInclusivePage from '../AllInclusivePage/AllInclusivePage'
import CruisesPage from '../CruisesPage/CruisesPage'
import AllExclusivePage from '../AllExclusivePage/AllExclusivePage'
import NavBar from '../../components/ NavBar/NavBar'
import ImageSlider from '../../components/ImgSlider/ImageSlider'
import images from '../../components/ImgSlider/images'
// import SearchBar from '../../components/SearchBar/SearchBar';
import { Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import AdminPage from '../AdminPage/AdminPage'

export default function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  // console.log(user)

  // const fetchState = async () => {
  //   try {
  //     const response = await fetch('/api/test')
  //     const data = await response.json()
  //     setState(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchState()
  // }, [])

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>SunnySide Paradise</h1>
        {/* <nav><SearchBar /></nav> */}
      </div>
      {
        user
          ? <>
            <NavBar />
            <Routes>
              <Route path='/cruises' element={<CruisesPage />} />
              <Route path='/exclusive' element={<AllExclusivePage />} />
              <Route path='/inclusive' element={<AllInclusivePage />} />
              <Route path='/admin' element={<AdminPage user={user} />} />
            </Routes>
            <ImageSlider images={images} />
            <Footer />
          </>
          : <AuthPage setUser={setUser} />
      }
    </div>
  )
}


import { useState } from 'react'
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

export default function App () {
  const [user, setUser] = useState(null)

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>SunnySide Paradise</h1>
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
              <Route path='/location/:id' element={<EditPage />} />
            </Routes>
            <ImageSlider images={images} />
            <Footer />
            </>
            
          : 
          <AuthPage setUser={setUser} />
         
      }
      
    </div>
  )
}

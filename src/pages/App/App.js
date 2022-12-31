
import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import AllInclusivePage from '../AllInclusivePage/AllInclusivePage';
import CruisesPage from '../CruisesPage/CruisesPage';
import AllExclusivePage from '../AllExclusivePage/AllExclusivePage';
import NavBar from '../../components/ NavBar/NavBar';
import ImageSlider from '../../components/ImgSlider/ImageSlider';
import images from '../../components/ImgSlider/images';
import { Routes, Route} from 'react-router-dom'

export default function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()  
  }, [])
  
  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar />
       <ImageSlider images={images}/>
          <Routes>
            <Route path="/cruises" element={<CruisesPage />} />
            <Route path="/exclusive" element={<AllExclusivePage />} />
            <Route path="/inclusive" element={<AllInclusivePage />} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


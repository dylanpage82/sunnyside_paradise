import { Link, useNavigate } from 'react-router-dom'


export default function NavBar ({setUser}) {
  const navigate = useNavigate()

const handleClick = (evt) => {
  setUser(null)
  localStorage.clear()
  navigate("/auth")
  
}
  return (
    <>
      <nav className='navBar'>
        <Link className='left' to='/inclusive'>All Inclusive Resorts</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to='/cruises'>Cruises</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to='/exclusive'>Resorts</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
        <Link to='/admin'>Admin Page</Link>
      <button className='logout' onClick={handleClick}>LogOut</button>
      </nav>

    </>
  )
}

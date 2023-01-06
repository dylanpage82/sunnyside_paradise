import { Link } from 'react-router-dom'

export default function NavBar () {
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
      </nav>

    </>
  )
}

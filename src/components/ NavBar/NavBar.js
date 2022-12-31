import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar() {
  return (
    <>
    <nav>
      <Link to="/inclusive">All Inclusive Resorts</Link>
      &nbsp; | &nbsp;
      <Link to="/cruises">Cruises</Link>
      &nbsp; | &nbsp;
      <Link to="/exclusive">Resorts</Link>
      <SearchBar />
    </nav>
  
    </>
  );
}
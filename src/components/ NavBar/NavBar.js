import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/inclusive">All Inclusive Resorts</Link>
      &nbsp; | &nbsp;
      <Link to="/cruises">Cruises</Link>
      &nbsp; | &nbsp;
      <Link to="/exclusive">Resorts</Link>
    </nav>
  );
}
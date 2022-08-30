import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/"><h1>Movie Details</h1></Link>
      </nav>
    </header>
  );
}

export default Navigation;

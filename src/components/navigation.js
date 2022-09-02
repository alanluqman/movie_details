import { Link } from 'react-router-dom';
import '../style/navigation.css';

function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/"><h1><i className="fa fa-angle-left" /></h1></Link>
      </nav>
    </header>
  );
}

export default Navigation;

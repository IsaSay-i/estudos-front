import '../styles/components/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-ul">
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/about">Sobre Mim</Link></li>
        </ul>
    </nav>
  )
};

export default NavBar;
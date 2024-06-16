import { Link } from 'react-router-dom';
import '.././assets/Nav.css'
import logo from '../../src/images/LOGO.jpg'
import { username } from '../componentes/Login';

function Nav() {
  console.log(username)
    return (
      <header>
         <nav className="navbar">
        <img src={logo} alt='LOGO' id='logo'></img>
        <ul>
          <Link to="/home" className='link'>Home</Link>
          <Link to="/productos" className='link'>Servicios</Link>
         <Link to="/login" className='link'>Contacto</Link>
         <Link to="/login" className='link'> Iniciar Sesión</Link>
         <Link to="/login" className='link'> Registrese</Link>
        </ul>
      </nav>
      </header>
     
    );
  }
  
  export default Nav;



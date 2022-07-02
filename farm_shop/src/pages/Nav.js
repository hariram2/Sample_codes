import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/">
          {/* <h4>Logo</h4> */}
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' alt='Logo' style={{width:'100px',height:'100px'}} />
        </Link>
        
        <ul className="nav-link">
            <Link to="/" style={{textDecoration:"none"}}><li className='re_nav'>Home</li></Link>
            <Link to="/product" style={{textDecoration:"none"}}> <li className='re_nav'>API calls</li></Link>
            {/* <Link to="/shop" style={{textDecoration:"none"}}> <li className='re_nav'>Shop</li></Link> */}
            <Link to="/lodash" style={{textDecoration:"none"}}> <li className='re_nav'>Lodash</li></Link>
            <Link to="/contact" style={{textDecoration:"none"}}> <li className='re_nav'>Status</li></Link>
            <Link to="/about" style={{textDecoration:"none"}}> <li className='re_nav'>HOC</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
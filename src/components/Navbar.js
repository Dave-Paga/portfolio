import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  Dave Pagaduan<i class="fab fa-dev"></i>
                </Link>
                

                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      About Me
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Skills
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Projects
                    </Link>
                  </li>
                </ul>

                {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
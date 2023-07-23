import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const jumpAboutMe = () => { 
    document.querySelector(`#about-me`).scrollIntoView();
    closeMobileMenu();
  }

  const jumpSkills = () => { 
    document.querySelector(`#skills`).scrollIntoView();
    closeMobileMenu();
  }

  const jumpProjects = () => { 
    document.querySelector(`#projects`).scrollIntoView();
    closeMobileMenu();
  }

  const jumpContactMe = () => { 
    document.querySelector(`#contact-me`).scrollIntoView();
    closeMobileMenu();
  }
  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() =>{
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  Dave Pagaduan<i class="fab fa-dev"></i>
                </Link>
                

                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link className='nav-links' onClick={jumpAboutMe}>
                      About Me
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-links' onClick={jumpSkills}>
                      Skills
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-links' onClick={jumpProjects}>
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link className='nav-links-mobile' onClick={jumpContactMe}>
                      Contact Me
                    </Link>
                  </li>


                </ul>
                {button && <Button buttonStyle='btn--outline1'>Contact Me</Button>}

            </div>
        </nav>
    </div>
  )
}

export default Navbar;
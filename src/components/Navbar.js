import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL i.fab.fa-typo3
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
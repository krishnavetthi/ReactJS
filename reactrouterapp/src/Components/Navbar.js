import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navigation">
        <div>
            <ul>
                <Link to ="/">
                    <li>Home</li>
                </Link>
                <Link to ="/about">
                    <li>About Us</li>
                </Link>
                <Link to ="/contact">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
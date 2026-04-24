import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
  <>
    <div className='navBackground'>
      <h3>MyDigitalLibrary</h3>
      <div className='navButtonSection'>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
      </div>
      
    </div>
   

  </>
    


)
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { TiUser } from "react-icons/ti";
import { BiSolidCameraMovie } from "react-icons/bi";

interface NavbarProps{
  setSearchText:React.Dispatch<React.SetStateAction<string>>;
}


const Navbar:React.FC<NavbarProps> = ({setSearchText}) => {


  return (
    <>
    <div className='navbar'>
      <div className='App_logo'>
        <BiSolidCameraMovie className='logo' />
        <h2>Movie<span>La</span></h2>
      </div>
     
      <ul >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/latest">Latest</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/bookmark">Bookmark</Link></li>
      </ul>

      <Link to='/login'><TiUser className='login_icon' /></Link>
    </div>
</>
  )
}

export default Navbar
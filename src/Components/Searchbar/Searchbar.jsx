import React from 'react'
// import { FaSearch } from "react-icons/fa";
import "../Searchbar/Searchbar.css"
import searchimg from "../../../src/image/searchimg.png"
import notification from "../../../src/image/notification img.png"
import logo from "../../../src/image/logo img.png"
export const Searchbar = () => {
  return (
    <div className='header' >
        <div className='search '>
     
          <input type="search"    className='search'  placeholder='Type to Search'/>
          
        </div>
        <img src={notification} alt="" id='noti-icon' />
        <div className='scl-logo'>
        <img src={logo} alt="" id='logo-icon' />
        <p id='name'>VV M.H.S</p>
        </div>
    </div>
  )
}
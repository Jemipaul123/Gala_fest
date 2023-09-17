import React,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Vector from '../../assets/Vector.png' 
import logo from '../../assets/logo.png' 
 
const Navbar =() =>
{ const [toggleMenu,setToggleMenu] =useState(false);
    return(
        <div className="navbar">
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                GALA MEC
                    
            
            </div>
            <div className='navbar-links_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#new">Events</a></p>
                <p><a href="#footer">Contact</a></p>
              
                <p></p>
            </div>
            
            </div>
            <div className='navbar-sign'>
                <p>Sign in</p>
                <button>Sign up</button>

            </div>
            <div className='navbar-menu'>
            {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#new">Events</a></p>
            <p><a href="#new">Contact</a></p>
            
          </div>
          <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}

            </div>
            
           
        </div>
    )
}
export default Navbar
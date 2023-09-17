import React from 'react';
import './navbar.css';


 
const Navbar =() =>
{ 
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
            
        {
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
        }

            </div>
            
           
        </div>
    )
}
export default Navbar

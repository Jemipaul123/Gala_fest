import React from 'react';
import './header.css';
import logo from '../../assets/logo.png'
 
const Header =() =>
{
    return(
        <div className='header section__padding' id="home">
            <div className='header-content'>
                <h1 className='gradient__text'>
                Hey There!
                <br/>Welcome to Gala MEC
                
                
                
                </h1>
                <div className='header-content__input'>
                    <input type="email" placeholder="Your Email Address"></input>
                    <button type="button">Lets Go</button>
                    </div>
                    </div>
                
                <div className='header-image'>
                    <img src ={logo} alt="logo"></img>
                    </div>
                
            
           
        </div>
    )
}
export default Header
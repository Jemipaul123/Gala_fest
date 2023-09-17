import React from 'react';
import './footer.css';
 
const Footer =() =>
{
    return(
        <div className='footer section__padding' id="footer">
            <div className='footer-heading'>
     <h1 className='gradient__text'>Share about Gala mec with all your friends</h1>
     
            </div>
            <div className='footer-btn'>
                <p>Share</p>
            </div>
            <div className='footer-links'>
                
                <div className='footer-links_div'>
                    <h4>Links</h4>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                    <p>Facebook</p>
                </div>
                <div className='footer-links_div'>
                    <h4>More Info</h4>
                    <p>Contact</p>
                    <p>0485-76587654</p>
                    <p>infogalamec@gmail.com</p>
                </div>
                <div className='footer-links_div'>
                    <h4>More Info</h4>
                    <p>Address</p>
                    <p>Govt Model engineering college,Thrikkakara</p>
                    <p>682311</p>
                </div>
                <div className='footer-copyright'>
                    
                    <p>© 2023 GALAMEC. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    )
}
export default Footer
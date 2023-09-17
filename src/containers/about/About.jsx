import React from 'react';
import {Feature} from '../../components';

import './about.css';
 
const About =() =>
{
    return(
        <div className="about section__margin" id="about">
           <div className='about-feature'>
             <Feature title="WHAT IS GALA?" text="It is one of the biggest tech fest in Kerala"/>
           </div>
           <div className='about-heading'>
            <h1 className='gradient__text'>The happenings are simply awesome</h1>
            <p>Explore The Techstacks</p>
            </div>
            <div className='about-container'>
                <Feature title="Tech" text="Tech events are the main of the fest."/>
                <Feature title="Non-tech" text="It includes managerial contests,music,dance and games."/>
                <Feature title="Outside" text="These are events performed by famous artists who come to our college"/>

           

           </div>
        </div>
    )
}
export default About